"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const Context = createContext();
export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      const res = await fetch("http://localhost:8008/sign-in", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status !== 200) {
        throw new Error("Invalid request");
      }
      const data = await res.json();

      checkToken(data.token);
      console.log(data.token);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <html lang="en">
      <Context.Provider value={{ setIsLoggedIn, isLoggedIn, signIn }}>
        <body className={inter.className}>{children}</body>
      </Context.Provider>
    </html>
  );
}

export const useAuth = () => {
  return useContext(Context);
};
