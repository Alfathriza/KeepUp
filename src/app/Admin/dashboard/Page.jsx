import React from "react";
import Navbar from "@/app/components/Navbar";
import TotalCard from "@/app/components/TotalCard";
import SmallCard from "@/app/components/SmallCard";
import SimpleBarChart from "@/app/components/Barchart";
import BasicPie from "@/app/components/Piechart";

export default function Page() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Row for TotalCard and SmallCard */}
      <div className="flex flex-grow p-4 justify-between mt-7">
        <TotalCard />
        <SmallCard />
      </div>

      {/* Row for BarChart and PieChart, aligned horizontally */}
      <div className="flex flex-grow p-4 justify-between mt-7 items-center">
        <div style={{ width: "50%" }}>
          <SimpleBarChart />
        </div>
        <div style={{ width: "40%" }}>
          <BasicPie />
        </div>
      </div>
    </div>
  );
}
