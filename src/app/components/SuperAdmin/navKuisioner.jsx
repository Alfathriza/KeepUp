"use client";
import React from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert2

const NavKuisioner = ({
  isEditingAnswer,
  isEditingQuestion,
  handleBackClick,
  handleSaveClick,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (isEditingAnswer || isEditingQuestion) {
      handleBackClick(); // Kembali ke daftar pertanyaan
    } else {
      router.push("/SuperAdmin/Kuisioner"); // Jika tidak, kembali ke halaman kuisioner utama
    }
  };

  const handleSave = () => {
    Swal.fire({
      title: "Konfirmasi Simpan",
      text: "Apakah Anda yakin ingin menyimpan perubahan?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, simpan!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        handleSaveClick(); // Panggil fungsi simpan dari parent
        Swal.fire("Tersimpan!", "Perubahan telah disimpan.", "success");
      }
    });
  };

  return (
    <div className="flex justify-between items-center p-4 mt-3 bg-white border-b border-gray-300">
      <div className="flex items-center">
        <ArrowLeft
          className="mr-2 text-slate-900 cursor-pointer"
          onClick={handleBack}
        />
        <span className="text-lg ml-6 text-slate-950 font-bold">
          Pengaturan Kuisioner
        </span>
      </div>
      <button
        onClick={handleSave}
        className="flex flex-row bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
      >
        Simpan Perubahan
        <Save className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};

export default NavKuisioner;
