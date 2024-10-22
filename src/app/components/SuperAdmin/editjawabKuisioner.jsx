"use client";
import React, { useState, useRef, useEffect } from "react";
import { Edit } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

export default function EditJawabKuisioner() {
  const [answers, setAnswers] = useState([]); // State untuk menyimpan jawaban
  const [editIndex, setEditIndex] = useState(null);
  const textRef = useRef(null);
  const scoreRef = useRef(null);
  const { id } = useParams(); // Mengambil id dari params

  // Fetch data dari API
  useEffect(() => {
    const fetchKuisionerData = async () => {
      try {
        const response = await fetch(
          `https://enormous-mint-tomcat.ngrok-free.app/v1/subKuisioner/${id}`, // URL dengan id yang diambil dari params
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
          // Simpan jawaban ke dalam state
          setAnswers(result.data.questions[0].answers); // Menyimpan jawaban dari pertanyaan pertama sebagai contoh
        }
      } catch (error) {
        console.error("Error fetching sub kuisioner data:", error);
      }
    };

    if (id) {
      fetchKuisionerData(); // Memanggil API jika id tersedia
    }
  }, [id]);

  // Fungsi untuk edit
  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  // Fungsi untuk menyimpan hasil edit
  const handleSaveClick = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].answer = textRef.current.value;
    updatedAnswers[index].score = parseInt(scoreRef.current.value, 10);
    setAnswers(updatedAnswers);
    setEditIndex(null);
  };

  return (
    <div className="mt-4 ml-16" style={{ width: "1400px" }}>
      <label className="font-semibold text-slate-900 text-xl mb-4 mt-4 block">
        Pilihan Jawaban:
      </label>
      {answers.map((answer, index) => (
        <div
          key={answer.id}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4 border border-black-500"
        >
          <div className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-gray-200 text-black rounded-full mr-4">
              {index + 1}
            </span>
            {editIndex === index ? (
              <input
                type="text"
                defaultValue={answer.answer}
                ref={textRef}
                className="text-slate-950 text-lg bg-white border border-gray-300 rounded px-2 py-1 mr-4"
              />
            ) : (
              <p className="text-slate-950 text-lg">{answer.answer}</p>
            )}
          </div>
          <div className="flex items-center">
            {editIndex === index ? (
              <>
                <input
                  type="number"
                  defaultValue={answer.score}
                  ref={scoreRef}
                  className="text-slate-950 text-lg bg-white border border-gray-300 rounded px-2 py-1 mr-4 w-16"
                />
                <button
                  onClick={() => handleSaveClick(index)}
                  className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg mr-4"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEditClick(index)}
                  className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-lg mr-4"
                >
                  Edit
                  <Edit className="ml-2 w-4 h-4" />
                </button>
                <span className="text-slate-950">Skor : {answer.score}</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
