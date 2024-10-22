"use client";
import React, { useState, useRef } from "react";
import { Edit } from "lucide-react";

export default function EditJawabKuisioner({ answers, setAnswers }) {
  const [editIndex, setEditIndex] = useState(null);
  const textRef = useRef(null);
  const scoreRef = useRef(null);

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handleSaveClick = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].text = textRef.current.value;
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
          key={index}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4 border border-black-500"
        >
          <div className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-gray-200 text-black rounded-full mr-4">
              {answer.id}
            </span>
            {editIndex === index ? (
              <input
                type="text"
                defaultValue={answer.text}
                ref={textRef}
                className="text-slate-950 text-lg bg-white border border-gray-300 rounded px-2 py-1 mr-4"
              />
            ) : (
              <p className="text-slate-950 text-lg">{answer.text}</p>
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
