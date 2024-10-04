import React from "react";
import { User } from "lucide-react";

export default function SmallCard() {
  return (
    <div className="flex flex-col items-start bg-white mt-20 max-w-full">
      <h2 className="font-semibold text-lg text-slate-900 ">
        Sebaran Hasil Kuisioner
      </h2>
      <div className="flex flex-row justify-start items-center space-x-4 mt-3">
        <div className="flex items-center bg-red-600 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-11 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">15</span> mengalami
            </h3>
            <p className="font-bold text-lg">Stress</p>
          </div>
        </div>
        <div className="flex items-center bg-orange-600 text-slate-50font-normal text-xl border rounded-lg shadow-lg px-11 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">12</span> mengalami
            </h3>
            <p className="font-bold text-lg">Kecemasan</p>
          </div>
        </div>
        <div className="flex items-center bg-yellow-400 text-slate-50 font-normal text-xl border rounded-lg shadow-lg  px-11 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">8</span> mengalami
            </h3>
            <p className="font-bold text-lg">Depresi</p>
          </div>
        </div>
        <div className="flex items-center bg-green-500 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-11 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">10</span> keadaan
            </h3>
            <p className="font-bold text-lg">Normal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
