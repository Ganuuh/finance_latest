"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  <MdHomeFilled />,
  <TiHome />,
  <RiContactsBook2Fill />,
  <MdContactMail />,
  <PiLadderFill />,
  <PiIntersectSquareFill />,
  <FaImage />,
  <FaMagnifyingGlassPlus />,
  <FaMicrophone />,
  <SiMicrosoftexcel />,
  <PiNotepadFill />,
  <ImMenu />,
  <PiLeafFill />,
  <PiNumberFiveFill />,
  <PiNumberCircleSevenFill />,
  <PiRoadHorizonFill />,
  <GiSandsOfTime />,
  <PiAnchorSimpleBold />,
  <PiTriangleFill />,
  <PiIntersectBold />,
  <BiLogoFlickrSquare />,
  <FaBaseballBall />,
  <AiFillQuestionCircle />,
  <TbSquareRoundedLetterA />,
  <BsWatch />,
  <PiGlobeSimpleFill />,
  <TbLemon />,
  <FaPeace />,
  <PiToiletPaperFill />,
  <FaPencilAlt />,
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
  const [records, setRecords] = useState([]);
  const [categoryAdded, setCategoryAdded] = useState(false);
  // const [myLink] = useSearchParams();
  // console.log(myLink);

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
      console.log(data.message);
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
      const { filteredCategories } = res.data;
      setRecords(filteredCategories);
    } catch (error) {
      console.log(error);
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

  return (
    <html lang="en">
      <Context.Provider
        value={{
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
          records,
          newIcons,
          colorChoice,
          categoryAdded,
          setCategoryAdded,
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
