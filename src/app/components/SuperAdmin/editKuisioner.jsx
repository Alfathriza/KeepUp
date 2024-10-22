"use client";
import React, { useState, useRef } from "react";
import { Edit, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function EditKuisioner({ questions, setQuestions }) {
  const [editIndex, setEditIndex] = useState(null);
  const questionRef = useRef(null);
  const router = useRouter(); // Initialize useRouter for navigation

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handleSaveClick = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = questionRef.current.value;
    setQuestions(updatedQuestions);
    setEditIndex(null);
  };

  const handleBackClick = () => {
    router.push("/SuperAdmin/Kuisioner"); // Navigate back to the previous page
  };

  return (
    <div className="mt-4 ml-16" style={{ width: "1400px" }}>
      {/* Back button and Edit Pertanyaan title */}
      <div className="flex items-center mb-4">
        <ArrowLeft
          className="mr-2 text-slate-900 cursor-pointer"
          onClick={handleBackClick}
        />
        <label className="font-semibold text-slate-900 text-xl">
          Edit Pertanyaan
        </label>
      </div>

      <label className="font-semibold text-slate-900 text-l mb-4 mt-4 block">
        Pertanyaan
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
            {editIndex === index ? (
              <input
                type="text"
                defaultValue={question}
                ref={questionRef}
                className="flex-row text-slate-950 text-lg bg-white border border-gray-300 rounded px-2 py-1 mr-4"
              />
            ) : (
              <p className="flex-row text-slate-950 text-lg">{question}</p>
            )}
          </div>
          <div className="flex items-center">
            {editIndex === index ? (
              <button
                onClick={() => handleSaveClick(index)}
                className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg mr-4"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(index)}
                className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-lg"
              >
                Edit
                <Edit className="ml-2 w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
