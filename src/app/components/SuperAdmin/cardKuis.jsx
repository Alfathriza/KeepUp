"use client"
import { Edit } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation"; // Import dari next/navigation

export default function CardKuis() {
  const router = useRouter(); // Inisialisasi router

  const cardData = [
    {
      title: "Kesejahteraan Emosional dan Mental",
      description: "150 Pertanyaan",
    },
    {
      title: "Penggunaan Teknologi dan Dampaknya",
      description: "150 Pertanyaan",
    },
    {
      title: "Manajemen Waktu dan Produktivitas",
      description: "150 Pertanyaan",
    },
  ];

  // Fungsi untuk pindah halaman
  const handleEditClick = () => {
    router.push("/SuperAdmin/editKuisioner"); // Arahkan ke halaman editKuisioner/page
  };

  return (
    <div className="flex justify-between mt-10 space-x-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col bg-blue-600 text-white p-6 rounded-lg h-50 max-w-xs mt-10 shadow-lg"
          style={{ height: "200px" }}
        >
          <h3 className="font-semibold text-lg">{card.title}</h3>
          <div className="flex justify-between items-center mt-auto w-full">
            <p className="text-sm">{card.description}</p>
            <button
              onClick={handleEditClick} // Tambahkan onClick untuk tombol Edit
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg"
            >
              Edit
              <Edit className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
