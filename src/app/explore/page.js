"use client";

import AppHeader from "@/components/app-header";
import { Box, Container } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

export default function ExplorePage() {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hospital/groups", {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPieData(json);
      });
  }, []);

  return (
    <>
      <AppHeader target={"explore"} />
      <Container sx={{ mt: 3 }}>
        <h1>Explore</h1>
        <Box justifyContent={"flex-start"}>
          <PieChart
            series={[
              {
                data: pieData,
                innerRadius: 80,
              },
            ]}
            width={200}
            height={200}
          />
        </Box>
      </Container>
    </>
  );
}
