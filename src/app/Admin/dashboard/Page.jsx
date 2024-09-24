import React from "react";
import Navbar from "@/app/components/Navbar"; 
import TotalCard from "@/app/components/TotalCard";

export default function Page() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <Navbar />
      <div className="flex-grow flex flex-col items-start p-4">
        {" "}
        {/* Flex column untuk isi halaman */}
        <TotalCard />
      </div>
    </div>
  );
}
