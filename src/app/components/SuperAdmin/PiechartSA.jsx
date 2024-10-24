"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  const [data, setData] = React.useState([
    { id: 0, value: 0, label: "Perempuan" },
    { id: 1, value: 0, label: "Laki-Laki" },
  ]);

  // Fetch data from API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://enormous-mint-tomcat.ngrok-free.app/v1/statistik/superAdmin/user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZWVmZGUxLWFiNWYtNDEyOS1iZGUyLTlmZWFjZThlOTMxNSIsInVzZXIiOiJNdWhhbW1hZCBEYWZmYSBSYWloYW4gU3VwZXJBZG1pbiIsInJvbGUiOiIzOGQzMjIzYS0xMjYwLTQyYmYtYTMxNy02N2JlZDZlYmE2ODEiLCJpYXQiOjE3Mjk3Njk2NjksImlzcyI6IkFwaUtlZXBVcCIsImF1ZCI6IktlZXBVcCIsImV4cCI6MTcyOTc3MzI2OX0.TGhvZ-U2jNpWa3TRSBXozpErsw2PPgqGFdQ9EjeOd4I`,
              "ngrok-skip-browser-warning": "69420", // Ganti dengan token yang valid
            },
          }
        );
        const result = await response.json();
        if (result.statusCode === 200) {
          const genderData = result.data.StatistikGender;
          setData([
            { id: 0, value: genderData.perempuan, label: "Perempuan" },
            { id: 1, value: genderData["laki-laki"], label: "Laki-Laki" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching gender data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={400}
      height={200}
    />
  );
}
