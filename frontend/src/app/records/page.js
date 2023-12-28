import { AddCategory } from "@/components/AddCategory";
import { AddRecord } from "@/components/AddRecord";
import { NavBar } from "@/components/NavBar";
import { RecordsLeft } from "@/components/RecordsLeft";
import { RecordRight } from "@/components/RecordsRight";
import { RecordsContainer } from "@/components/ScreenContainer";

export default function Home() {
  return (
    <div className="w-sreen h-fit bg-[#F3F4F6]">
      <AddRecord />
      <AddCategory />
      <NavBar />
      <div className="w-full h-fit flex justify-center items-center mt-[70px] p-7 ">
        <RecordsContainer>
          <RecordsLeft />
          <RecordRight />
        </RecordsContainer>
      </div>
    </div>
  );
}
