import React from "react";
import Navbar from "@/app/components/Navbar";
import TotalCard from "@/app/components/TotalCard";
import SmallCard from "@/app/components/SmallCard";
import SBarChart from "@/app/components/Barchart";
import BasicPie from "@/app/components/Piechart";
import TableMahasiswa from "@/app/components/TableMahasiswa";
import RecomAi from "@/app/components/RecomAi";

export default function Page() {
  return (
    <div className="flex flex-col bg-white min-h-screen ">
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
          <SBarChart />
        </div>
        <div style={{ width: "40%" }}>
          <BasicPie />
        </div>
      </div>

      <div className="flex flex-grow p-4 justify-between">
        <TableMahasiswa />
      </div>
      <div className="flex flex-grow p-4 justify-between">
        <RecomAi />
      </div>
    </div>
  );
}
