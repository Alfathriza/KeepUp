"use client";
import { Edit } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import dari next/navigation

export default function CardKuis() {
  const router = useRouter(); // Inisialisasi router
  const [subKuisionerData, setSubKuisionerData] = useState([]); // State untuk menyimpan data subKuisioner

  // Fetch data from API
  useEffect(() => {
    const fetchKuisionerData = async () => {
      try {
        const response = await fetch(
          "https://enormous-mint-tomcat.ngrok-free.app/v1/kuisioner/1667321d-25f3-43ba-b90c-cca473d127d0",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZWVmZGUxLWFiNWYtNDEyOS1iZGUyLTlmZWFjZThlOTMxNSIsInVzZXIiOiJNdWhhbW1hZCBEYWZmYSBSYWloYW4gU3VwZXJBZG1pbiIsInJvbGUiOiIzOGQzMjIzYS0xMjYwLTQyYmYtYTMxNy02N2JlZDZlYmE2ODEiLCJpYXQiOjE3Mjk3NzcxOTgsImlzcyI6IkFwaUtlZXBVcCIsImF1ZCI6IktlZXBVcCIsImV4cCI6MTcyOTc4MDc5OH0.hGpOhDzGQ_LJaCmSTbMtT-0tz9rvoAedt60QoqxcImk`,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        const result = await response.json();
        if (result.statusCode === 200) {
          setSubKuisionerData(result.data.subKuisioners); // Simpan data subKuisioner ke dalam state
        }
      } catch (error) {
        console.error("Error fetching kuisioner data:", error);
      }
    };

    fetchKuisionerData(); // Panggil fungsi fetch ketika komponen di-mount
  }, []);

  // Fungsi untuk pindah halaman edit subKuisioner
  const handleEditClick = (id) => {
    router.push(`/SuperAdmin/editKuisioner/${id}`); // Arahkan ke halaman editSubKuisioner berdasarkan id
  };

  if (subKuisionerData.length === 0) {
    return <div>Loading...</div>; // Loading state jika data belum tersedia
  }

  return (
    <div className="">
      <div className="flex flex-wrap items-center ml-20 gap-12 mt-14">
        {/* List SubKuisioner */}
        {subKuisionerData.map((subKuisioner) => (
          <div
            key={subKuisioner.id}
            className="flex flex-col bg-gray-200 text-black p-4 rounded-lg shadow"
            style={{ width: "400px", height: "200px" }} // Menentukan lebar tetap untuk setiap item
          >
            <h4 className="font-semibold text-md">{subKuisioner.title}</h4>
            <p className="text-sm">
              Created At:{" "}
              {new Date(subKuisioner.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm">
              Updated At:{" "}
              {new Date(subKuisioner.updatedAt).toLocaleDateString()}
            </p>
            <button
              onClick={() => handleEditClick(subKuisioner.id)} // Pindah ke halaman edit subKuisioner berdasarkan id
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
            >
              Edit
              <Edit className="w-4 h-4 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
