import { Typography,Box } from '@mui/material';
import React from 'react'
import RomanConversion from '../Utilities/RomanConversion';

export default function SideDataInfo({dataInfo}) {
  return (
    <>
      <Box m={2}>
        {dataInfo !== null && dataInfo !== undefined ? (
          <>
            <Typography variant="h5">
              {`Episode ${RomanConversion(dataInfo.episode_id)} - ${
                dataInfo.title
              }`}
            </Typography>
            <br />
            <br />
            <Typography variant="body">{dataInfo.opening_crawl}</Typography>
            <br />
            <br />
            <br />
            <Typography variant="caption">{dataInfo.director}</Typography>
          </>
        ) : (
          "No Movie Selected"
        )}
      </Box>
    </>
  );
}
