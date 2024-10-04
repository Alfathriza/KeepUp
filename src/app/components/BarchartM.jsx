"use client";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

// Komponen grafik batang
const SimpleBarChart = ({ title, dataset }) => {
  const chartSetting = {
    yAxis: [
      {
        label: "Jumlah Pengisi Kuisioner",
      },
    ],
    series: [{ dataKey: "jumlah", label: "Jumlah Pengisi" }],
    height: 300, // Pastikan tinggi seragam
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "300px", marginTop: "20px" }}>
      <h2
        className="font-semibold text-lg text-slate-900"
        style={{ marginBottom: "10px" }}
      >
        {title}
      </h2>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "category" }]}
        {...chartSetting}
      />
    </div>
  );
};

export default SimpleBarChart;
