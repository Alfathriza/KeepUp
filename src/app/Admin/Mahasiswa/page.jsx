import React from "react";
import Navbar from "@/app/components/Navbar";
import SmallCard from "@/app/components/SmallCard";
import TotalCard from "@/app/components/TotalCard";
import TableMahasiswa from "@/app/components/TableMahasiswa";
import DataLengkapM from "@/app/components/DataLengkapM";

export default function Mahasiswa() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />
      {/* Row for TotalCard and SmallCard */}
      <div className="flex flex-grow p-4 justify-between mt-7">
        <TotalCard />
        <SmallCard />
      </div>
      <div className="flex flex-grow p-4 justify-between">
        <TableMahasiswa />
      </div>
      <div className="flex flex-grow p-4 justify-between">
        <DataLengkapM />
      </div>
    </div>
  );
}
