import React, { useState, useEffect } from "react";
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

export default function DashBoard({ data, selectSort, searchQuery }) {
  const [dataInfo, setDataInfo] = useState(null);
  const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!data.length) return;
    let dummyData = [...data];
    if (selectSort === "none") {
      setFilteredData(dummyData);
    } else if (selectSort === "episode_id") {
      const newData = dummyData.sort((a, b) => {
        if (a.episode_id < b.episode_id) {
          return -1;
        }
      });
      setFilteredData(newData);
    } else if (selectSort === "release_date") {
      const newData = dummyData.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return -1;
        }
      });
      setFilteredData(newData);
    } else if (selectSort === "title") {
      const newData = dummyData.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
      });
      setFilteredData(newData);
    } else if (selectSort === "desc") {
      const newData = dummyData.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
      });
      setFilteredData(newData);
    }
  }, [data, selectSort]);

  useEffect(() => {
    const check = setTimeout(() => {
       if (searchQuery !== "" && data.length) {
         let dummyData = [...data];
         const newData = dummyData.filter(({ title }) => {
           return title.toLowerCase().includes(searchQuery.toLowerCase());
         });
         setFilteredData(newData);
       } else {
         setFilteredData(data);
       }
    },800)

    return () => clearTimeout(check)
   
  }, [data, searchQuery]);


  return (
    <Box sx={{ flexGrow: 1 }} data-testid="dashboard">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs>
          <Item>
            <DataList
              data={data}
              setDataInfo={setDataInfo}
              filterData={filterData}
            />
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
