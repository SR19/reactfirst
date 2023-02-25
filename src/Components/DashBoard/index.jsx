import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import DataList from "./DataList";
import SideDataInfo from "./SideDataInfo";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  minHeight: "100vh",
}));

export default function DashBoard({ data }) {
  const [dataInfo, setDataInfo] = useState(null);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs>
          <Item>
            <DataList data={data} setDataInfo={setDataInfo} />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <SideDataInfo dataInfo={dataInfo} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
