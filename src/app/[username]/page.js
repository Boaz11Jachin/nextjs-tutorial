"use client";

import AppHeader from "@/components/app-header";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function UserIndexPage() {
  const params = useParams(); // [username]  pathvariable
  const username = params.username;

  const searchParams = useSearchParams(); // ? queryString
  const tab = searchParams.get("tab");

  console.log(params, searchParams);
  const [value, setValue] = useState(() => {
    if (tab == "repositories") {
      return 1;
    } else if (tab == "projects") {
      return 2;
    } else if (tab == "package") {
      return 3;
    } else if (tab == "stars") {
      return 4;
    } else {
      return 0;
    }
  });

  return (
    <>
      <AppHeader target={username} />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} aria-label="basic tabs example">
            <Tab label="Overview" />
            <Tab label="Repositories" />
            <Tab label="Projects" />
            <Tab label="Package" />
            <Tab label="Stars" />
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
