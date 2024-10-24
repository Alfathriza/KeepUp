"use client";
import React, { useEffect, useState, useRef } from "react";
import { Edit } from "lucide-react";
import { useParams } from "next/navigation";
import NavKuisioner from "./NavKuisioner"; // Import NavKuisioner

export default function IsiKuisioner() {
  const { id } = useParams(); // Mengambil id dari URL params
  const [kuisionerTitle, setKuisionerTitle] = useState(""); // State untuk judul kuisioner
  const [isEditingTitle, setIsEditingTitle] = useState(false); // State untuk edit judul
  const [isShowButtonTitle, setIsShowButtonTitle] = useState(true); // State untuk edit judul
  const titleRef = useRef(null); // Referensi untuk input judul kuisioner
  const [questions, setQuestions] = useState([]); // State untuk menyimpan pertanyaan dari API
  const [selectedQuestion, setSelectedQuestion] = useState(null); // State untuk menyimpan pertanyaan yang dipilih untuk diedit
  const [editIndex, setEditIndex] = useState(null); // State untuk melacak jawaban yang sedang di-edit
  const [isEditingAnswer, setIsEditingAnswer] = useState(false); // State untuk melacak apakah sedang mengedit jawaban
  const [isEditingQuestion, setIsEditingQuestion] = useState(false); // State untuk melacak apakah sedang mengedit pertanyaan
  const questionTitleRef = useRef(null); // Referensi untuk judul pertanyaan yang di-edit
  const textRef = useRef(null); // Referensi untuk input jawaban yang di-edit
  const scoreRef = useRef(null); // Referensi untuk input skor yang di-edit

  // Fetch data dari API berdasarkan id
  useEffect(() => {
    const fetchKuisionerData = async () => {
      try {
        const response = await fetch(
          `https://enormous-mint-tomcat.ngrok-free.app/v1/subKuisioner/${id}`, // URL dengan id dari params
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZWVmZGUxLWFiNWYtNDEyOS1iZGUyLTlmZWFjZThlOTMxNSIsInVzZXIiOiJNdWhhbW1hZCBEYWZmYSBSYWloYW4gU3VwZXJBZG1pbiIsInJvbGUiOiIzOGQzMjIzYS0xMjYwLTQyYmYtYTMxNy02N2JlZDZlYmE2ODEiLCJpYXQiOjE3Mjk3NzcxOTgsImlzcyI6IkFwaUtlZXBVcCIsImF1ZCI6IktlZXBVcCIsImV4cCI6MTcyOTc4MDc5OH0.hGpOhDzGQ_LJaCmSTbMtT-0tz9rvoAedt60QoqxcImk`, // Token autentikasi yang valid
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        const result = await response.json();
        if (result.statusCode === 200) {
          setQuestions(result.data.questions); // Simpan data questions dari API response
          setKuisionerTitle(result.data.title); // Simpan judul kuisioner
        }
      } catch (error) {
        console.error("Error fetching kuisioner data:", error);
      }
    };

    if (id) {
      fetchKuisionerData(); // Panggil fungsi fetch hanya jika id tersedia
    }
  }, [id]);

  // Fungsi untuk menyimpan judul kuisioner yang diedit
  const handleSaveTitleClick = () => {
    setKuisionerTitle(titleRef.current.value); // Update judul kuisioner
    setIsEditingTitle(false); // Keluar dari mode edit
  };

  // Fungsi untuk menangani klik tombol edit pertanyaan
  const handleEditClick = (question) => {
    setIsShowButtonTitle(false)
    setSelectedQuestion(question); // Simpan pertanyaan yang dipilih
    setIsEditingQuestion(true); // Set ke true jika mengedit pertanyaan
    setIsEditingAnswer(false); // Pastikan mengedit jawaban dalam keadaan false
  };

  // Fungsi untuk menyimpan judul pertanyaan dan jawaban yang diedit
  const handleSaveClick = () => {
    // Update judul pertanyaan
    const updatedQuestion = {
      ...selectedQuestion,
      question: questionTitleRef.current.value,
    };

    // Simpan perubahan ke pertanyaan tanpa mengembalikan ke daftar
    const updatedQuestions = questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    );
    setQuestions(updatedQuestions);
    setIsEditingAnswer(false); // Tetap di halaman edit tanpa mengubah state `selectedQuestion` atau `editIndex`
  };

  // Fungsi untuk menyimpan jawaban yang diedit
  const handleSaveAnswerClick = (answerIndex) => {
    // Update jawaban
    const updatedAnswers = [...selectedQuestion.answers];
    updatedAnswers[answerIndex].answer = textRef.current.value;
    updatedAnswers[answerIndex].score = parseInt(scoreRef.current.value, 10);

    setSelectedQuestion({
      ...selectedQuestion,
      answers: updatedAnswers,
    }); // Simpan perubahan
    setEditIndex(null); // Tetap di halaman setelah menyimpan
  };

  // Fungsi untuk menangani klik back
  const handleBackClick = () => {
    if (isEditingAnswer) {
      setIsEditingAnswer(false); // Kembali ke halaman edit pertanyaan
    } else {
       setIsShowButtonTitle(true);
      setSelectedQuestion(null); // Kembali ke daftar pertanyaan
      setIsEditingQuestion(false);
    }
  };

  return (
    <div>
      <NavKuisioner
        isEditingAnswer={isEditingAnswer}
        isEditingQuestion={isEditingQuestion}
        handleBackClick={handleBackClick} // Operasikan handleBackClick
        handleSaveClick={handleSaveClick} // Operasikan handleSaveClick
      />
      <div className="mt-4 ml-16" style={{ width: "1400px" }}>
        {/* Hanya tampilkan button Edit di halaman edit pertanyaan, dan hilangkan di halaman edit jawaban */}
        {!isEditingAnswer && (
          <div className="mb-6">
            <label className="font-semibold text-slate-950 text-sm mb-2 block">
              Judul Kuisioner
            </label>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
              {isEditingTitle ? (
                <input
                  type="text"
                  defaultValue={kuisionerTitle}
                  ref={titleRef}
                  className="font-semibold text-lg text-slate-950 bg-white border border-gray-300 rounded px-2 py-1"
                />
              ) : (
                <h3 className="font-semibold text-lg text-slate-950">
                  {kuisionerTitle}
                </h3>
              )}
              {isShowButtonTitle?(   <button
                onClick={
                  isEditingTitle
                    ? handleSaveTitleClick
                    : () => setIsEditingTitle(true)
                }
                className={`flex items-center ${
                  isEditingTitle
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-black"
                } px-4 py-2 rounded-lg`}
              >
                {isEditingTitle ? "Save" : "Edit"}
                <Edit className="ml-2 w-4 h-4" />
              </button>):null}
          
            </div>
          </div>
        )}

        {/* Jika ada pertanyaan yang dipilih, tampilkan jawaban dan form edit */}
        {selectedQuestion ? (
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Edit Pertanyaan
            </h2>

            {/* Input untuk mengedit judul pertanyaan */}
            <div className="flex flex-row items-center mb-4">
              <input
                type="text"
                defaultValue={selectedQuestion.question}
                ref={questionTitleRef}
                className="p-2 border border-gray-300 rounded-lg flex-grow text-black"
              />
              <button
                onClick={handleSaveClick} // Tombol untuk menyimpan perubahan judul pertanyaan
                className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-4"
              >
                Save
              </button>
            </div>

            {/* Menampilkan jawaban yang bisa di-edit */}
            {selectedQuestion.answers.map((answer, index) => (
              <div
                key={answer.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4"
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
                        onClick={() => handleSaveAnswerClick(index)}
                        className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg mr-4"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditIndex(index);
                          setIsEditingAnswer(true); // Set ke true jika mengedit jawaban
                        }}
                        className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-lg mr-4"
                      >
                        Edit
                      </button>
                      <span className="text-slate-950">
                        Skor: {answer.score}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Tampilkan daftar pertanyaan jika tidak ada pertanyaan yang sedang di-edit
          <>
            {questions.map((question, index) => (
              <div
                key={question.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4"
              >
                <div className="flex flex-row items-start">
                  <span className="flex-row mr-4 text-slate-950 font-semibold">
                    {index + 1}.
                  </span>
                  <p className="flex-row text-slate-950 text-lg">
                    {question.question}
                  </p>
                </div>
                <button
                  onClick={() => handleEditClick(question)} // Pilih pertanyaan untuk diedit
                  className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-lg"
                >
                  Edit
                  <Edit className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
