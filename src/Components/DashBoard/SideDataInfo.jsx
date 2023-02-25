import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import React from 'react'
import RomanConversion from '../Utilities/RomanConversion';
import { useTheme } from "@mui/material/styles";

export default function SideDataInfo({ dataInfo }) {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box m={2}>
        {dataInfo !== null && dataInfo !== undefined ? (
          <>
            <Typography variant={matches ? 'h6' :"h5"}>
              {`Episode ${RomanConversion(dataInfo.episode_id)} - ${
                dataInfo.title
              }`}
            </Typography>
            <br />
            <br />
            <Typography variant={matches ? 'caption' :"body"}>
              {dataInfo.opening_crawl
                ? dataInfo.opening_crawl
                : "Info Not Available"}
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant="caption">
              Director : {dataInfo.director ? dataInfo?.director : "NA"}
            </Typography>{" "}
            <br />
            <Typography variant="caption">
              Producer : {dataInfo.producer ? dataInfo.producer : "NA"}
            </Typography>
          </>
        ) : (
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Container>
              {" "}
              <Typography variant="h6">No Movie Selected</Typography>{" "}
            </Container>
          </Box>
        )}
      </Box>
    </>
  );
}
