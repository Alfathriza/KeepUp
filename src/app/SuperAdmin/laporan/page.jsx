"use client";
import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "@/app/components/SuperAdmin/NavbarSA";
import RecomAi from "@/app/components/SuperAdmin/RecomAiSA";
import SBarChart from "@/app/components/SuperAdmin/BarchartSA";
import BasicPie from "@/app/components/SuperAdmin/PiechartSA";
import Cookies from "js-cookie";
import SimpleBarChart from "@/app/components/Admin/BarchartM";
import StatistikKuisionerChart from "@/app/components/SuperAdmin/BarchartMSA";

const LaporanPage = () => {
  const chartsRef = useRef();
  const [datasets, setDatasets] = useState({});
  const [loading, setLoading] = useState(true);
  // const access_token = Cookies.get("access_token");

  // // Fetch data from API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://enormous-mint-tomcat.ngrok-free.app/v1/statistik/superAdmin/symtomp",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${access_token}`,
  //             "ngrok-skip-browser-warning": "69420",
  //           },
  //         }
  //       );

  //       const result = await response.json();

  //       if (result.statusCode === 200 && result.data.StatistikKuisioner) {
  //         const rawData = result.data.StatistikKuisioner;

  //         // Transform API data
  //         // const transformedDatasets = {
  //         //   Depresi: Object.entries(rawData.Depresi[0]).map(
  //         //     ([level, count]) => ({
  //         //       category: level,
  //         //       jumlah: count,
  //         //     })
  //         //   ),
  //         //   Stress: Object.entries(rawData.Stress[0]).map(([level, count]) => ({
  //         //     category: level,
  //         //     jumlah: count,
  //         //   })),
  //         //   Kecemasan: Object.entries(rawData.Kecemasan[0]).map(
  //         //     ([level, count]) => ({
  //         //       category: level,
  //         //       jumlah: count,
  //         //     })
  //         //   ),
  //         //   Prokrastinasi: Object.entries(rawData.Prokrastinasi[0]).map(
  //         //     ([level, count]) => ({
  //         //       category: level,
  //         //       jumlah: count,
  //         //     })
  //         //   ),
  //         //   KecanduanPonsel: Object.entries(rawData["Kecanduan Ponsel"][0]).map(
  //         //     ([level, count]) => ({
  //         //       category: level,
  //         //       jumlah: count,
  //         //     })
  //         //   ),
  //         // };
  //         console.log(rawData);
  //         setDatasets(rawData);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Function to download PDF
  const downloadPDF = async () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Laporan Hasil Kuisioner", 20, 20);
    doc.setFontSize(12);

    let y = 40; // Y-coordinate for text
    for (const [title, data] of Object.entries(datasets)) {
      doc.text(title, 20, y);
      y += 10; // Space between texts
      data.forEach((item) => {
        doc.text(`${item.category}: ${item.jumlah}`, 30, y);
        y += 10; // Space between items
      });
      y += 10; // Space between categories
    }

    setTimeout(async () => {
      const charts = await html2canvas(chartsRef.current);
      const chartsImageData = charts.toDataURL("image/png");

      doc.addImage(chartsImageData, "PNG", 15, y, 180, 150);
      doc.save("laporan_kuisioner.pdf");
    }, 1000);
  };

  // if (loading) {
  //   return <div className="text-center mt-20">Loading data...</div>;
  // }

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-start ml-8 bg-white mt-28 max-w-md">
        <h2 className="font-semibold text-lg text-slate-900 ">
          Laporan Hasil Kuisioner
        </h2>
      </div>
      <div className="flex justify-end mt-2 mr-10">
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500 transition"
        >
          Download PDF
        </button>
      </div>

      {/* Container for charts */}
      <div ref={chartsRef} className="flex flex-col gap-4 mx-10">
        {
          <div
            className="flex flex-col justify-start items-center"
            style={{ marginTop: "20px" }}
          >
            <StatistikKuisionerChart />
          </div>
          /* 
        <div className="flex flex-row justify-start gap-28 ">
          <SimpleBarChart
            title="Kategori Prokrastinasi"
            dataset={datasets.Prokrastinasi}
          />
          <SimpleBarChart
            title="Kategori Kecanduan Ponsel"
            dataset={datasets.KecanduanPonsel}
          />
        </div> */
        }
      </div>

      <div className="flex flex-grow p-4 justify-between">
        <RecomAi />
      </div>
      <div className="flex flex-grow p-4 justify-between mt-7 items-center">
        <div style={{ width: "50%" }}>
          <SBarChart />
        </div>
        <div style={{ width: "40%" }}>
          <BasicPie />
        </div>
      </div>
    </div>
  );
};

export default LaporanPage;
