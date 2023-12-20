import { DashboardHead } from "@/components/DashBoardHead";
import { DashboardBottom } from "@/components/DashboardBottom";
import { DashboardMid } from "@/components/DashboardMid";
import { NavBar } from "@/components/NavBar";
import { DashboardContainer } from "@/components/ScreenContainer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-screen h-fit bg-[#F3F4F6] flex flex-col mt-[70px] px-[120px] py-8 gap-6">
        <DashboardContainer>
          <DashboardHead />
          <DashboardMid />
          <DashboardBottom />
        </DashboardContainer>
      </div>
    </>
  );
}
