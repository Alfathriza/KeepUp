"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Perempuan" },
            { id: 1, value: 15, label: "Laki-Laki" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
