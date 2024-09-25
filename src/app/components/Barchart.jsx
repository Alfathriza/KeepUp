"use client";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

// Fake data kuisioner
const dataset = [
  { category: "Depresi", jumlah: 120 },
  { category: "Stres", jumlah: 95 },
  { category: "Kecemasan", jumlah: 110 },
  { category: "Prokrastinasi", jumlah: 80 },
  { category: "Kecanduan Ponsel", jumlah: 140 },
];

const chartSetting = {
  yAxis: [
    {
      label: "Jumlah Pengisi Kuisioner",
    },
  ],
  series: [{ dataKey: "jumlah", label: "Jumlah Pengisi" }],
  height: 300, 
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function SimpleBarChart() {
  return (
    <div style={{ width: "700px", height: "400px", marginTop: "20px" }}>
      
      <h2
        className="font-semibold text-xl text-slate-900"
        style={{ marginBottom: "10px" }}
      >
        Grafik Hasil Kuisioner
      </h2>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "category", 
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
