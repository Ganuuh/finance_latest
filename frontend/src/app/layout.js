"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { api } from "@/common";
import { MdHomeFilled } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { PiLadderFill } from "react-icons/pi";
import { PiIntersectSquareFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiNotepadFill } from "react-icons/pi";
import { ImMenu } from "react-icons/im";
import { PiLeafFill } from "react-icons/pi";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiTriangleFill } from "react-icons/pi";
import { PiIntersectBold } from "react-icons/pi";
import { BiLogoFlickrSquare } from "react-icons/bi";
import { FaBaseballBall } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TbSquareRoundedLetterA } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { PiGlobeSimpleFill } from "react-icons/pi";
import { TbLemon } from "react-icons/tb";
import { FaPeace } from "react-icons/fa";
import { PiToiletPaperFill } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";

const newIcons = [
  <MdHomeFilled key={1} />,
  <TiHome key={1} />,
  <RiContactsBook2Fill key={1} />,
  <MdContactMail key={1} />,
  <PiLadderFill key={1} />,
  <PiIntersectSquareFill key={1} />,
  <FaImage key={1} />,
  <FaMagnifyingGlassPlus key={1} />,
  <FaMicrophone key={1} />,
  <SiMicrosoftexcel key={1} />,
  <PiNotepadFill key={1} />,
  <ImMenu key={1} />,
  <PiLeafFill key={1} />,
  <PiNumberFiveFill key={1} />,
  <PiNumberCircleSevenFill key={1} />,
  <PiRoadHorizonFill key={1} />,
  <GiSandsOfTime key={1} />,
  <PiAnchorSimpleBold key={1} />,
  <PiTriangleFill key={1} />,
  <PiIntersectBold key={1} />,
  <BiLogoFlickrSquare key={1} />,
  <FaBaseballBall key={1} />,
  <AiFillQuestionCircle key={1} />,
  <TbSquareRoundedLetterA key={1} />,
  <BsWatch key={1} />,
  <PiGlobeSimpleFill key={1} />,
  <TbLemon key={1} />,
  <FaPeace key={1} />,
  <PiToiletPaperFill key={1} />,
  <FaPencilAlt key={1} />,
];
const colorChoice = [
  "#0166FF",
  "#01B3FF",
  "#41CC00",
  "#F9D100",
  "#FF7B01",
  "#AE01FF",
  "#FF0101",
];
const inter = Inter({ subsets: ["latin"] });

const Context = createContext();
export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [category, setCategory] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [records, setRecords] = useState([]);
  const [dashboardRecords, setDashboardRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [categoryAdded, setCategoryAdded] = useState(false);
  const [recordAdded, setRecordAdded] = useState(false);
  const [link, setLink] = useState(true);
  const [recordFilter, setRecordFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [inputMax, setInputMax] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [deleteBannerRecord, setDeleteBannerRecord] = useState(false);
  const [deleteBannerCategory, setDeleteBannerCategory] = useState(false);
  const [deletingRecordId, setRecordId] = useState("");
  const [deletingCategoryId, setCategoryId] = useState("");
  const [days, setDays] = useState(0);
  const [newest, setNewest] = useState(true);
  const myLink = usePathname();

  useEffect(() => {
    myLink.includes("dashboard") ? setLink(true) : setLink(false);
  }, [myLink]);

  const router = useRouter();

  const checkToken = (token) => {
    if (token) {
      setIsLoggedIn(true);
      localStorage.setItem("token", `${token}`);
      router.push("/dashboard");
    } else {
      setIsLoggedIn(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post("/log-in", {
        password,
        email,
      });
      const { token } = data;
      checkToken(token);
      toast.info(data.message);
    } catch (err) {
      toast.info(err);
    }
  };

  const getCategory = async () => {
    try {
      const res = await api.get("/get-categories", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecord = async () => {
    try {
      const res = await api.get("/records", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        params: {
          days: new Date(Date.now() - 3600 * 1000 * 24 * days).setHours(
            0,
            0,
            0
          ),
          newest: newest,
        },
      });

      setRecords(res.data[0]);
      setDashboardRecords(res.data[1]);
    } catch (error) {
      toast.info(error);
    }
  };

  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    getRecord();
  }, [recordAdded, days, newest]);

  useEffect(() => {
    const a = records
      .filter((record) => {
        if (recordFilter === "All") return true;
        return record.type === recordFilter;
      })
      .filter((record) => {
        if (categoryFilter === "All") return true;
        return record.category.name === categoryFilter;
      })
      .filter((record) => {
        return parseInt(record.amount) <= maxAmount;
      });

    setFilteredRecords(a);
  }, [recordFilter, categoryFilter, recordAdded, maxAmount, records]);

  const findMax = (records) => {
    let max = 0;
    records.forEach((record) => {
      const amount = Number(record.amount);
      if (amount > max) {
        max = amount;
      }
    });
    setInputMax(max);
    setMaxAmount(max);
  };

  useEffect(() => {
    findMax(records);
  }, [records, recordAdded]);
  return (
    <html lang="en">
      <Context.Provider
        value={{
          checkToken,
          setIsLoggedIn,
          isLoggedIn,
          signIn,
          isReady,
          isShown,
          setIsShown,
          category,
          setCategory,
          addCategory,
          setAddCategory,
          getCategory,
          getRecord,
          categories,
          newIcons,
          colorChoice,
          categoryAdded,
          setCategoryAdded,
          recordAdded,
          setRecordAdded,
          recordFilter,
          records,
          setRecordFilter,
          categoryFilter,
          setCategoryFilter,
          link,
          filteredRecords,
          totalExpense,
          totalIncome,
          setTotalExpense,
          setTotalIncome,
          deleteBannerRecord,
          setDeleteBannerRecord,
          deletingRecordId,
          setRecordId,
          deletingCategoryId,
          setCategoryId,
          deleteBannerCategory,
          setDeleteBannerCategory,
          inputMax,
          maxAmount,
          setMaxAmount,
          days,
          setDays,
          dashboardRecords,
          setNewest,
          newest,
        }}
      >
        <body className={inter.className}>
          {((<ToastContainer />), children)}
        </body>
      </Context.Provider>
    </html>
  );
}

export const useAuth = () => {
  return useContext(Context);
};
