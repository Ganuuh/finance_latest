"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import { BigButton } from "./BigButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertText } from "./AlertText";

import { api } from "@/common";
export const FirstStep = () => {
  const [isShown, setShown] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [isStrong, setIsStrong] = useState(["Must contain"]);
  const [errors, setError] = useState([""]);
  const router = useRouter();
  const sendData = async (password, email, name) => {
    try {
      const { data } = await api.post("/sign-up", {
        password,
        email,
      });
      console.log(data);
    } catch (err) {
      console.log(err, "Error");
    }
  };
  const isMathching = () => {
    const passMatch = rePass === password ? true : false;
    setError([""]);

    if (passMatch) {
      sendData(password, email, name);
      router.push("/secondstep");
    } else {
      alert("Passwords must match");
    }
  };
  const isPasswordValid = () => {
    if (password == "") {
      alert("Password must not be empty");
      return;
    }
    if (password.length < 10) {
      setIsStrong(isStrong.push("-Above 10 letters"));
    }
    if (!password.match(/[a-z]/)) {
      setIsStrong(isStrong.push("-Lower case letter"));
    }
    if (!password.match(/[A-Z]/)) {
      setIsStrong(isStrong.push("-Upper case letter"));
    }
    if (!password.match(/\d+/)) {
      setIsStrong(isStrong.push("-Atleast one number"));
    }
    if (!password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
      setIsStrong(isStrong.push("-Special characters"));
    }
    isStrong.length < 2 ? isMathching() : setError(isStrong);
    setIsStrong(["Must contain"]);
  };

  const isValid = () => {
    const includes =
      email.includes("@gmail.com") || email.includes("@yahoo.com");
    const isNameValid = name.length > 4;

    !includes
      ? alert("Not Valid Email")
      : !isNameValid
      ? alert("Name must be 5 charachters long")
      : isPasswordValid();
  };

  const clickHandler = () => {
    setShown((prev) => !prev);
  };
  return (
    <div className="w-[50%] h-fit flex flex-col items-center gap-10">
      <div
        className={`w-[25%] h-fit  fixed top-[37.5%] left-[62.5%] rounded-lg bg-white flex flex-col gap-4 p-5 ${
          errors.length > 1 ? "flex" : "hidden"
        }`}
      >
        <p className="w-fit h-fit text-[20px] font-semibold text-black">
          Password not strong
        </p>
        {errors.map((each) => {
          return <AlertText key={each} text={each} />;
        })}
      </div>
      <Logo
        height="24px"
        text="16px"
        title="Create Geld account"
        desc="Sign up below to create your Wallet account"
      />
      <form className="w-full h-fit flex flex-col gap-3 text-[16px] font-normal text-black">
        <input
          type="text"
          className="w-full p-[16px] text-black flex items-center bg-[#F3F4F6] border-[1px] border-[#D1D5DB] rounded-md"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="w-full p-[16px] text-black flex items-center bg-[#F3F4F6] border-[1px] border-[#D1D5DB] rounded-md"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type={isShown ? "password" : "text"}
          className="w-full p-[16px] text-black flex items-center bg-[#F3F4F6] border-[1px] border-[#D1D5DB] rounded-md"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type={isShown ? "password" : "text"}
          className="w-full p-[16px] text-black flex items-center bg-[#F3F4F6] border-[1px] border-[#D1D5DB] rounded-md"
          placeholder="Confirm Password"
          value={rePass}
          onChange={(e) => {
            setRePass(e.target.value);
          }}
        ></input>
        <p
          className="text-[14px] text-black font-medium cursor-pointer w-[150px]"
          onClick={clickHandler}
        >
          {isShown ? "Show Password" : "Hide Password"}
        </p>
        <div
          onClick={() => {
            isValid();
          }}
        >
          <BigButton text="Sign up" />
        </div>
      </form>
      <div className="w-fit h-fit flex gap-4">
        <p className="text-[16px] text-[#0F172A] font-normal">
          Already have account?
        </p>
        <Link href="/">
          <p className="text-[#0166FF] text-[16px] font-normal">Log in</p>
        </Link>
      </div>
    </div>
  );
};
