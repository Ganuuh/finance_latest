"use client";
import { useAuth } from "@/app/layout";
import { useState } from "react";
import { api } from "@/common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddCategory = () => {
  const {
    addCategory,
    setAddCategory,
    newIcons,
    colorChoice,
    setCategoryAdded,
  } = useAuth();
  const [isOn, setIsOn] = useState(false);
  const [color, setColor] = useState("#000");
  const [icon, setIcon] = useState(0);
  const [name, setName] = useState("");

  const notification = (message) => {
    toast.info(message);
  };

  const postCategory = async () => {
    if (name === "") {
      toast.info("Name cannot be empty");
      return;
    }
    try {
      const { data } = await api.post(
        "/categories",
        {
          color,
          icon,
          name,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      notification(data.message);
      setAddCategory(false);
      setCategoryAdded((prev) => !prev);
    } catch (error) {
      notification(error);
    }
  };

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 ${
        addCategory ? "flex" : "hidden"
      } items-center justify-center z-40 `}
    >
      <ToastContainer />
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
                <div style={{ color: color }}>{newIcons[icon]}</div>
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
                  {newIcons.map((each, index) => {
                    return (
                      <div
                        key={index}
                        className=" h-fit w-fit  cursor-pointer text-black"
                        onClick={() => {
                          setIcon(index);
                        }}
                      >
                        {each}
                      </div>
                    );
                  })}
                </div>
                <div className="w-full h-fit flex justify-between items-center  p-4">
                  {colorChoice.map((each) => {
                    return (
                      <div
                        key={each}
                        onClick={() => {
                          setColor(each);
                        }}
                        className={`w-[24px] aspect-square rounded-full  border`}
                        style={{ backgroundColor: each }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-[350px] h-[48px] bg-[#F9FAFB] rounded-md px-3 text-black"
            ></input>
          </div>
          <div
            onClick={() => {
              postCategory();
            }}
            className="w-full h-fit py-4 text-[#fff] bg-[#16A34A] flex justify-center items-center rounded-full"
          >
            Add Category
          </div>
        </div>
      </div>
    </div>
  );
};
