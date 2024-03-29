"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import { BigButton } from "./BigButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogIn = () => {
  const { signIn } = useAuth();
  const [isShown, setShown] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, []);

  const isPasswordValid = () => {
    if (password === "") {
      toast.info("Password must not be empty");
      return;
    }
    signIn(email, password);
  };

  const isValid = () => {
    const includes =
      email.includes("@gmail.com") || email.includes("@yahoo.com");
    includes ? isPasswordValid() : toast.info("Not valid email");
  };

  const clickHandler = () => {
    setShown((prev) => !prev);
  };
  return (
    <div className="w-[50%] h-[50%] flex flex-col items-center gap-10">
      <ToastContainer />
      <div className="w-fit flex flex-col gap-[14px] h-fit items-center justify-center">
        <Logo
          height="24px"
          text="16px"
          title="Welcome Back"
          desc="Welcome back, Please enter your details"
        />
      </div>
      <form className="w-full h-fit flex flex-col gap-[10px]">
        <input
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
        <p
          onClick={() => {
            clickHandler();
          }}
          className="text-[14px] text-black font-medium cursor-pointer w-[150px]"
        >
          {isShown ? "Show Password" : "Hide Password"}
        </p>

        <div
          onClick={() => {
            isValid();
          }}
        >
          <BigButton text="Log in" />
        </div>
      </form>
      <div className="w-fit h-fit flex gap-4">
        <p className="text-[16px] text-[#0F172A] font-normal">
          Don’t have account?
        </p>
        <Link href="/signup">
          <p className="text-[#0166FF] text-[16px] font-normal">Sign up</p>
        </Link>
      </div>
    </div>
  );
};
