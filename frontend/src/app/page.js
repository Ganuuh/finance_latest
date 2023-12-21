"use client";
import { LogIn } from "@/components/LogIn";
import { LogInContainer } from "@/components/LogInContainer";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    fetch("http://localhost:8008/login")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }, []);
  return (
    <LogInContainer>
      <LogIn />
    </LogInContainer>
  );
}
