import { LastRecord } from "./LastRecord";

export const DashboardBottom = () => {
  const data = [
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
    { pic: "/House.png", gategory: "Lending & Renting", date: "2" },
  ];
  return (
    <div className="w-full h-fit flex flex-col rounded-md bg-[#FFFFFF] items-center px-6">
      <p className="w-full h-fit text-[16px] text-[#0F172A] py-6 font-semibold border-b-[1px]">
        Last Record
      </p>
      {data.map((each, index) => {
        return (
          <LastRecord
            key={index}
            pic={each.pic}
            gategory={each.gategory}
            date={each.date}
          />
        );
      })}
    </div>
  );
};
