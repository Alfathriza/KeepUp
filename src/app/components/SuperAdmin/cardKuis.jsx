"use client";
import { Edit } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import dari next/navigation

export default function CardKuis() {
  const router = useRouter(); // Inisialisasi router
  const [kuisionerData, setKuisionerData] = useState([]); // State untuk menyimpan data kuisioner

  // Fetch data from API
  useEffect(() => {
    const fetchKuisionerData = async () => {
      try {
        const response = await fetch(
          "https://enormous-mint-tomcat.ngrok-free.app/v1/kuisioner",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZWVmZGUxLWFiNWYtNDEyOS1iZGUyLTlmZWFjZThlOTMxNSIsInVzZXIiOiJNdWhhbW1hZCBEYWZmYSBSYWloYW4gU3VwZXJBZG1pbiIsInJvbGUiOiIzOGQzMjIzYS0xMjYwLTQyYmYtYTMxNy02N2JlZDZlYmE2ODEiLCJpYXQiOjE3Mjk1OTk4OTQsImlzcyI6IkFwaUtlZXBVcCIsImF1ZCI6IktlZXBVcCIsImV4cCI6MTcyOTYwMzQ5NH0.OklCwWNDw-j0neAcrRtJYx1w0vuIfwzvyvgVLy9V_7U`,
              "ngrok-skip-browser-warning": "69420", // Ganti dengan token autentikasi jika diperlukan
            },
          }
        );
        const result = await response.json();
        if (result.statusCode === 200) {
          setKuisionerData(result.data); // Simpan data ke dalam state
        }
      } catch (error) {
        console.error("Error fetching kuisioner data:", error);
      }
    };

    fetchKuisionerData(); // Panggil fungsi fetch ketika komponen di-mount
  }, []);

  // Fungsi untuk pindah halaman edit kuisioner
  const handleEditClick = (id) => {
    router.push(`/SuperAdmin/editKuisioner/${id}`); // Arahkan ke halaman editKuisioner berdasarkan id
  };

  return (
    <div className="flex justify-between mt-10 space-x-4">
      {kuisionerData.map((kuisioner) => (
        <div
          key={kuisioner.id}
          className="flex flex-col bg-blue-600 text-white p-6 rounded-lg h-50 max-w-xs mt-10 shadow-lg"
          style={{ height: "200px", width: "400px", maxWidth: "400px" }}
        >
          <h3 className="font-semibold text-lg">{kuisioner.title}</h3>
          <div className="flex justify-between items-center mt-auto w-full">
            <p className="text-sm">
              Aktif: {kuisioner.isActive ? "Ya" : "Tidak"}
            </p>
            <button
              onClick={() => handleEditClick(kuisioner.id)} // Pindah ke halaman edit berdasarkan id kuisioner
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
