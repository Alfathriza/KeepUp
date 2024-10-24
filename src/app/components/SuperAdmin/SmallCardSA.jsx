"use client";
import React, { useEffect, useState } from "react";
import { User } from "lucide-react";

export default function SmallCard() {
  const [statistik, setStatistik] = useState({
    Normal: 0,
    Depresi: 0,
    Stress: 0,
    Kecemasan: 0,
    Prokrastinasi: 0,
    Kecanduan: 0,
  });

  // Fetch data from API
  useEffect(() => {
    const fetchStatistik = async () => {
      try {
        const response = await fetch(
          "https://enormous-mint-tomcat.ngrok-free.app/v1/statistik/superAdmin",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZWVmZGUxLWFiNWYtNDEyOS1iZGUyLTlmZWFjZThlOTMxNSIsInVzZXIiOiJNdWhhbW1hZCBEYWZmYSBSYWloYW4gU3VwZXJBZG1pbiIsInJvbGUiOiIzOGQzMjIzYS0xMjYwLTQyYmYtYTMxNy02N2JlZDZlYmE2ODEiLCJpYXQiOjE3Mjk3Njk2NjksImlzcyI6IkFwaUtlZXBVcCIsImF1ZCI6IktlZXBVcCIsImV4cCI6MTcyOTc3MzI2OX0.TGhvZ-U2jNpWa3TRSBXozpErsw2PPgqGFdQ9EjeOd4I`,
              "ngrok-skip-browser-warning": "69420", // Ganti dengan token atau metode autentikasi lainnya
            },
          }
        );
        const result = await response.json();
        if (result.statusCode === 200) {
        
          setStatistik(result.data.StatistikKuisioner);
        }
      } catch (error) {
        console.error("Error fetching statistik:", error);
      }
    };

    fetchStatistik();
  }, []);

  return (
    <div className="flex flex-col items-start bg-white mt-20 max-w-full">
      <h2 className="font-semibold text-lg text-slate-900 ">
        Sebaran Hasil Kuisioner
      </h2>
      <div className="flex flex-row justify-start items-center space-x-4 mt-3">
        <div className="flex items-center bg-red-600 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-4 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">{statistik.Stress}</span>{" "}
              mengalami
            </h3>
            <p className="font-bold text-lg">Stress</p>
          </div>
        </div>
        <div className="flex items-center bg-orange-600 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-4 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">{statistik.Kecemasan}</span>{" "}
              mengalami
            </h3>
            <p className="font-bold text-lg">Kecemasan</p>
          </div>
        </div>
        <div className="flex items-center bg-yellow-400 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-4 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">{statistik.Depresi}</span>{" "}
              mengalami
            </h3>
            <p className="font-bold text-lg">Depresi</p>
          </div>
        </div>
        <div className="flex items-center bg-blue-700 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-4 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">
                {statistik.Prokrastinasi}
              </span>{" "}
              mengalami
            </h3>
            <p className="font-bold text-lg">Prokrastinasi</p>
          </div>
        </div>
        <div className="flex items-center bg-red-600 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-4 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">
                {statistik.Kecanduan}
              </span>{" "}
              mengalami
            </h3>
            <p className="font-bold text-lg">Kecanduan Ponsel</p>
          </div>
        </div>
        <div className="flex items-center bg-green-500 text-slate-50 font-normal text-xl border rounded-lg shadow-lg px-4 py-2">
          <User className="w-7 h-7 mr-2" />
          <div className="flex flex-col">
            <h3>
              <span className="font-bold text-2xl">{statistik.Normal}</span>{" "}
              keadaan
            </h3>
            <p className="font-bold text-lg">Normal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
