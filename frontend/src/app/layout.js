"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Context = createContext();
export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "true");
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
