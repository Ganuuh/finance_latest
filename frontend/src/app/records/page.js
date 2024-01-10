"use client";
import { AddCategory } from "@/components/AddCategory";
import { AddRecord } from "@/components/AddRecord";
import { NavBar } from "@/components/NavBar";
import { RecordsLeft } from "@/components/RecordsLeft";
import { RecordRight } from "@/components/RecordsRight";
import { RecordsContainer } from "@/components/ScreenContainer";
import { useAuth } from "../layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isReady, isLoggedIn } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (isReady && !isLoggedIn) {
      router.push("/");
    }
  }, [isReady, isLoggedIn]);

  if (!isReady) return null;
  return (
    <div className="w-sreen h-fit bg-[#F3F4F6]">
      <AddRecord />
      <AddCategory />
      <NavBar />
      <div className="w-full h-fit overflow-scroll flex justify-center items-center mt-[70px] p-7 ">
        <RecordsContainer>
          <RecordsLeft />
          <RecordRight />
        </RecordsContainer>
      </div>
    </div>
  );
}
