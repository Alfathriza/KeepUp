import { User } from "lucide-react";
import React from "react";

export default function TotalCard() {
  return (
    <div className="flex flex-col items-start bg-white mt-20 max-w-md">
      <h2 className="font-semibold text-lg text-slate-900 ">
        Total Pengisi Kuisioner
      </h2>
      <div className="flex items-center text-slate-950 font-normal text-xl border rounded-lg border-black mt-3 px-11 py-5">
        <User className="w-7 h-7 mr-2" />{" "}
        
        <h3>
          <span className="font-bold text-2xl">15</span> dari 30
        </h3>
      </div>
    </div>
  );
}
