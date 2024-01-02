"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/common";

const inter = Inter({ subsets: ["latin"] });

const Context = createContext();
export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [category, setCategory] = useState(false);
  const [addCategory, setAddCategory] = useState(false);

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
    } catch (err) {
      console.log("Error", err);
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
        }}
      >
        <body className={inter.className}>{children}</body>
      </Context.Provider>
    </html>
  );
}

export const useAuth = () => {
  return useContext(Context);
};
