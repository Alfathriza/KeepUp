import { User } from "lucide-react";
import React from "react";

export default function TableMahasiswa() {
  return (
    <div className="flex flex-col items-start bg-white max-w-md">
      <h2 className="font-semibold text-xl text-slate-900">
        Mahasiswa Yang Butuh Pertolongan Segera
      </h2>
      <h6 className="font-light text-xl text-slate-900 whitespace-nowrap mt-2">
        Mahasiswa dibawah ini terindikasi memiliki kesehatan mental dan
        membutuhkan tindakan segera
      </h6>

      <div className="flex items-center text-slate-950 font-normal text-xl bg-slate-100 border rounded-lg shadow mt-7 px-11 py-5 w-[1480px] h-[80px]">
        {/* <User className="w-7 h-7 mr-2" />{" "} */}
        <h3 className="whitespace-nowrap">
          <span className="font-bold text-xl">Alfath Rizanatul Ikhsan</span>
        </h3>
        <h5 className="whitespace-nowrap ml-16">
          <span className="font-light text-xl">Mengalami:</span>
        </h5>
        <div className="flex items-end border rounded-lg bg-red-600 p-2 ml-20">
          <h6 className="text-slate-50">Depresi</h6>
        </div>
        <div className="flex items-end border rounded-lg bg-slate-500 p-2 ml-10">
          <h6 className="text-slate-50">Prokrastinasi</h6>
        </div>
        <div className="flex items-end border rounded-lg bg-slate-500 p-2 ml-10 whitespace-nowrap">
          <h6 className="text-slate-50">Kecanduan Ponsel</h6>
        </div>
        <div className="flex justify-between w-full ml-16">
          <a href="#" className="text-slate-900 underline font-light">
            Kontak Mahasiswa
          </a>
        </div>
      </div>
      <div className="flex items-center text-slate-950 font-normal text-xl bg-slate-100 border rounded-lg shadow mt-7 px-11 py-5 w-[1480px] h-[80px]">
        {/* <User className="w-7 h-7 mr-2" />{" "} */}
        <h3 className="whitespace-nowrap">
          <span className="font-bold text-xl">Elang Samudra Bintang</span>
        </h3>
        <h5 className="whitespace-nowrap ml-16">
          <span className="font-light text-xl">Mengalami:</span>
        </h5>
        <div className="flex items-end border rounded-lg bg-red-600 p-2 ml-20">
          <h6 className="text-slate-50">Depresi</h6>
        </div>
        <div className="flex items-end border rounded-lg bg-slate-500 p-2 ml-10">
          <h6 className="text-slate-50">Prokrastinasi</h6>
        </div>
        <div className="flex items-end border rounded-lg bg-slate-500 p-2 ml-10 whitespace-nowrap">
          <h6 className="text-slate-50">Kecanduan Ponsel</h6>
        </div>
        <div className="flex justify-between w-full ml-16">
          <a href="#" className="text-slate-900 underline font-light">
            Kontak Mahasiswa
          </a>
        </div>
      </div>
    </div>
  );
}
