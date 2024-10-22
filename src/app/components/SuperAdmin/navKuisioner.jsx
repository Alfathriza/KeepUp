"use client"
import React from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter dari next/navigation

const NavKuisioner = () => {
  const router = useRouter(); // Inisialisasi router

  const handleBackClick = () => {
    router.push("/SuperAdmin/Kuisioner"); // Arahkan ke halaman yang diinginkan
  };

  return (
    <div className="flex justify-between items-center p-4 mt-3 bg-white border-b border-gray-300">
      <div className="flex items-center">
        {/* Tambahkan onClick ke ArrowLeft */}
        <ArrowLeft
          className="mr-2 text-slate-900 cursor-pointer"
          onClick={handleBackClick}
        />
        <span className="text-lg ml-6 text-slate-950 font-bold">
          Pengaturan Kuisioner
        </span>
      </div>
      <button className="flex flex-row bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
        Simpan Perubahan
        <Save className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};

export default NavKuisioner;
