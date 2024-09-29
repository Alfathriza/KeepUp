import React from "react";
import Navbar from "@/app/components/Navbar";
import TotalCard from "@/app/components/TotalCard";
import SmallCard from "@/app/components/SmallCard";
import TableMahasiswa from "@/app/components/TableMahasiswa";


export default function PageMahasiswa() {
  return (
    <div className="flex flex-col bg-white min-h-screen ">
      {/* Header */}
      <Navbar />

      {/* Row for TotalCard and SmallCard */}
      <div className="flex flex-grow p-4 justify-between mt-7">
        <TotalCard />
        <SmallCard />
      </div>

      <div className="flex flex-grow p-4 justify-between">
        <TableMahasiswa />
      </div>
    </div>
  );
}
