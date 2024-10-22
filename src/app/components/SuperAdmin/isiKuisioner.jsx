"use client";
import React, { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import { useRouter, useParams } from "next/navigation"; // Import useRouter dan useParams

export default function IsiKuisioner() {
  const router = useRouter(); // Inisialisasi router
  const { id } = useParams(); // Mengambil id dari URL params

  const [questions, setQuestions] = useState([]); // State untuk menyimpan pertanyaan dari API

  // Fetch data dari API berdasarkan id
  useEffect(() => {
    const fetchKuisionerData = async () => {
      try {
        const response = await fetch(
          `https://enormous-mint-tomcat.ngrok-free.app/v1/kuisioner/${id}`, // URL dengan id dari params
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZWVmZGUxLWFiNWYtNDEyOS1iZGUyLTlmZWFjZThlOTMxNSIsInVzZXIiOiJNdWhhbW1hZCBEYWZmYSBSYWloYW4gU3VwZXJBZG1pbiIsInJvbGUiOiIzOGQzMjIzYS0xMjYwLTQyYmYtYTMxNy02N2JlZDZlYmE2ODEiLCJpYXQiOjE3Mjk1OTk4OTQsImlzcyI6IkFwaUtlZXBVcCIsImF1ZCI6IktlZXBVcCIsImV4cCI6MTcyOTYwMzQ5NH0.OklCwWNDw-j0neAcrRtJYx1w0vuIfwzvyvgVLy9V_7U`,
              "ngrok-skip-browser-warning": "69420", // Ganti dengan token autentikasi yang valid
            },
          }
        );
        const result = await response.json();
        if (result.statusCode === 200) {
          setQuestions(result.data.subKuisioners); // Simpan subKuisioners sebagai pertanyaan
        }
      } catch (error) {
        console.error("Error fetching kuisioner data:", error);
      }
    };

    if (id) {
      fetchKuisionerData(); // Panggil fungsi fetch hanya jika id tersedia
    }
  }, [id]); // Efek akan berjalan ketika id berubah

  const handleEditClick = (question) => {
    // Arahkan ke halaman editPertanyaan/page dengan pertanyaan sebagai query parameter
    router.push(`/SuperAdmin/editPertanyaan?=${id}`);
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
            <p className="flex-row text-slate-950 text-lg">{question.title}</p>
          </div>
          <button
            onClick={() => handleEditClick(question.title)}
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
