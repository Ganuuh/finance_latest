"use client";
import { useAuth } from "@/app/layout";
import { useState } from "react";
// import { MdHomeFilled } from "react-icons/md";
// import { TiHome } from "react-icons/ti";
// import { RiContactsBook2Fill } from "react-icons/ri";
// import { MdContactMail } from "react-icons/md";
// import { PiLadderFill } from "react-icons/pi";
// import { PiIntersectSquareFill } from "react-icons/pi";
// import { FaImage } from "react-icons/fa6";
// import { FaMagnifyingGlassPlus } from "react-icons/fa6";
// import { FaMicrophone } from "react-icons/fa6";
// import { SiMicrosoftexcel } from "react-icons/si";
// import { PiNotepadFill } from "react-icons/pi";
// import { ImMenu } from "react-icons/im";
// import { PiLeafFill } from "react-icons/pi";
// import { PiNumberFiveFill } from "react-icons/pi";
// import { PiNumberCircleSevenFill } from "react-icons/pi";
// import { PiRoadHorizonFill } from "react-icons/pi";
// import { GiSandsOfTime } from "react-icons/gi";
// import { PiAnchorSimpleBold } from "react-icons/pi";
// import { PiTriangleFill } from "react-icons/pi";
// import { PiIntersectBold } from "react-icons/pi";
// import { BiLogoFlickrSquare } from "react-icons/bi";
// import { FaBaseballBall } from "react-icons/fa";
// import { AiFillQuestionCircle } from "react-icons/ai";
// import { TbSquareRoundedLetterA } from "react-icons/tb";
// import { BsWatch } from "react-icons/bs";
// import { PiGlobeSimpleFill } from "react-icons/pi";
// import { TbLemon } from "react-icons/tb";
// import { FaPeace } from "react-icons/fa";
// import { PiToiletPaperFill } from "react-icons/pi";
// import { FaPencilAlt } from "react-icons/fa";

// const newIcons = [
//   <MdHomeFilled />,
//   <TiHome />,
//   <RiContactsBook2Fill />,
//   <MdContactMail />,
//   <PiLadderFill />,
//   <PiIntersectSquareFill />,
//   <FaImage />,
//   <FaMagnifyingGlassPlus />,
//   <FaMicrophone />,
//   <SiMicrosoftexcel />,
//   <PiNotepadFill />,
//   <ImMenu />,
//   <PiLeafFill />,
//   <PiNumberFiveFill />,
//   <PiNumberCircleSevenFill />,
//   <PiRoadHorizonFill />,
//   <GiSandsOfTime />,
//   <PiAnchorSimpleBold />,
//   <PiTriangleFill />,
//   <PiIntersectBold />,
//   <BiLogoFlickrSquare />,
//   <FaBaseballBall />,
//   <AiFillQuestionCircle />,
//   <TbSquareRoundedLetterA />,
//   <BsWatch />,
//   <PiGlobeSimpleFill />,
//   <TbLemon />,
//   <FaPeace />,
//   <PiToiletPaperFill />,
//   <FaPencilAlt />,
// ];
// const colorChoice = [
//   "#0166FF",
//   "#01B3FF",
//   "#41CC00",
//   "#F9D100",
//   "#FF7B01",
//   "#AE01FF",
//   "#FF0101",
// ];

export const AddCategory = () => {
  const { addCategory, setAddCategory } = useAuth();
  const [isOn, setIsOn] = useState(false);
  // const [icon, setIcon] = useState(<MdHomeFilled />);

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 ${
        addCategory ? "flex" : "hidden"
      } items-center justify-center z-40 `}
    >
      <div
        onClick={() => {
          setAddCategory(false);
        }}
        className="w-full h-full bg-[#00000080] absolute top-0 left-0 z-10"
      ></div>
      <div className="w-fit h-fit flex flex-col items-center bg-[#fff] rounded-md z-20">
        <div className="w-full flex items-center px-6 py-5 justify-between">
          <p className="w-fit h-fit text-[#0F172A] text-[20px] font-semibold">
            Add Category
          </p>
          <p
            onClick={() => {
              setAddCategory(false);
            }}
            className="w-fit h-fit text-[#000] text-[20px] font-semibold"
          >
            X
          </p>
        </div>
        <div className="w-full h-fit flex flex-col  p-6 gap-8">
          <div className="w-full h-fit flex gap-4">
            <div className="w-[84px] h-[48px] bg-[#F9FAFB] rounded-md flex justify-around items-center relative">
              <div className="w-[24px] h-[24px] flex justify-center items-center text-black">
                {/* {icon} */}
              </div>
              <img
                onClick={() => {
                  setIsOn((prev) => !prev);
                }}
                className={`w-6 h-6 rotate-${isOn ? "180" : "0"} duration-300`}
                src="/arrow_drop_down.png"
              />
              <div
                className={`absolute top-[110%] left-0 w-fit h-fit border-[1px] bg-[#fff]  rounded-md ${
                  isOn ? "flex" : "hidden"
                }  flex-col items-center gap-6`}
              >
                <div className="w-[310px] h-fit grid grid-cols-6 gap-6 p-5 ">
                  {/* {newIcons.map((each) => {
                    return (
                      <div
                        className=" h-fit w-fit  cursor-pointer text-black"
                        onClick={() => {
                          setIcon(each);
                        }}
                      >
                        {each}
                      </div>
                    );
                  })} */}
                </div>
                <div className="w-full h-fit flex justify-between items-center  p-4">
                  {/* {colorChoice.map((each) => {
                    return (
                      <div
                        className={`w-[24px] aspect-square rounded-full bg-[${each}] border`}
                      ></div>
                    );
                  })} */}
                </div>
              </div>
            </div>
            <input
              placeholder="Name"
              className="w-[350px] h-[48px] bg-[#F9FAFB] rounded-md px-3"
            ></input>
          </div>
          <div className="w-full h-fit py-4 text-[#fff] bg-[#16A34A] flex justify-center items-center rounded-full">
            Add Category
          </div>
        </div>
      </div>
    </div>
  );
};
