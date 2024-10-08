import { Mail, Trash, SquareLibrary } from "lucide-react";
import React from "react";

export default function DataLengkapA() {
  return (
    <div className="flex flex-col items-start bg-white max-w-md mt-14">
      <h2 className="font-semibold text-lg text-slate-900">
        Data Lengkap Psikolog
      </h2>
      <div className="flex items-center text-slate-950 font-normal text-xl bg-slate-100 border rounded-lg shadow mt-7 px-11 py-5 w-[1480px] h-[120px]">
        <h3 className="flex flex-col whitespace-nowrap">
          <span className="font-bold text-lg">
            Dr. Fuad Anshori, S.Psi., M.Si., M.Ag., Psikolog
          </span>
          <span className="flex flex-row mt-1 font-light text-xs">
            <Mail className=" h-4 w-4 mr-2" />
            22523174@student.uii.ac.id
          </span>
          <span className="flex flex-row mt-1 font-light text-xs">
            <SquareLibrary className=" h-4 w-4 mr-2" />
            Psikologi, UII
          </span>
        </h3>
        <div className="ml-auto">
          <button
            href="#"
            className="flex flex-row text-slate-50 font-light bg-red-600 px-4 py-2 border rounded-lg text-sm"
          >
            Hapus
            <Trash className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center text-slate-950 font-normal text-xl bg-slate-100 border rounded-lg shadow mt-7 px-11 py-5 w-[1480px] h-[120px]">
        <h3 className="flex flex-col whitespace-nowrap">
          <span className="font-bold text-lg">
            Dr. Fuad Anshori, S.Psi., M.Si., M.Ag., Psikolog
          </span>
          <span className="flex flex-row mt-1 font-light text-xs">
            <Mail className=" h-4 w-4 mr-2" />
            22523174@student.uii.ac.id
          </span>
          <span className="flex flex-row mt-1 font-light text-xs">
            <SquareLibrary className=" h-4 w-4 mr-2" />
            Psikologi, UII
          </span>
        </h3>
        <div className="ml-auto">
          <button
            href="#"
            className="flex flex-row text-slate-50 font-light bg-red-600 px-4 py-2 border rounded-lg text-sm"
          >
            Hapus
            <Trash className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center text-slate-950 font-normal text-xl bg-slate-100 border rounded-lg shadow mt-7 px-11 py-5 w-[1480px] h-[120px]">
        <h3 className="flex flex-col whitespace-nowrap">
          <span className="font-bold text-lg">
            Dr. Fuad Anshori, S.Psi., M.Si., M.Ag., Psikolog
          </span>
          <span className="flex flex-row mt-1 font-light text-xs">
            <Mail className=" h-4 w-4 mr-2" />
            22523174@student.uii.ac.id
          </span>
          <span className="flex flex-row mt-1 font-light text-xs">
            <SquareLibrary className=" h-4 w-4 mr-2" />
            Psikologi, UII
          </span>
        </h3>
        <div className="ml-auto">
          <button
            href="#"
            className="flex flex-row text-slate-50 font-light bg-red-600 px-4 py-2 border rounded-lg text-sm"
          >
            Hapus
            <Trash className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
