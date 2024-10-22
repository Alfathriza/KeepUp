"use client"
import React from "react";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter dari next/navigation

export default function IsiKuisioner() {
  const router = useRouter(); // Inisialisasi router

  const questions = [
    "Bagaimana Anda biasanya bereaksi ketika menghadapi situasi yang sangat menegangkan?",
    "Seberapa sering Anda merasa kesulitan untuk fokus pada tugas sehari-hari?",
    "Bagaimana perasaan Anda tentang diri sendiri dalam sebulan terakhir?",
    "Bagaimana perasaan Anda tentang diri sendiri dalam sebulan terakhir?",
    "Bagaimana perasaan Anda tentang diri sendiri dalam sebulan terakhir?",
  ];

  const handleEditClick = (question) => {
    // Arahkan ke halaman editPertanyaan/page dengan pertanyaan sebagai query parameter
    router.push(`/SuperAdmin/editPertanyaan?=${question}`);
  };

  return (
    <div className="mt-4 ml-16" style={{ width: "1400px" }}>
      <label className="font-semibold text-slate-900 text-sm mb-4 block">
        Isi Kuisioner
      </label>
      {questions.map((question, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4"
        >
          <div className="flex flex-row items-start">
            <span className="flex-row mr-4 text-slate-950 font-semibold">
              {index + 1}.
            </span>
            <p className="flex-row text-slate-950 text-lg">{question}</p>
          </div>
          <button
            onClick={() => handleEditClick(question)} 
            className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-lg"
          >
            Edit
            <Edit className="ml-2 w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
