import React from 'react'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {ListItemAvatar,ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from '@mui/material';
import RomanConversion from '../Utilities/RomanConversion';
export default function DataList({ data, setDataInfo }) {
  console.log("datas", data);
  return (
    <>
      <List>
        {data.length > 0 &&
          data.map((list, key) => (
            <>
              <ListItem
                disablePadding
                key={key}
                secondaryAction={
                  <Typography variant="caption">{list.release_date}</Typography>
                }
              >
                <ListItemButton onClick={(e) => setDataInfo(list)}>
                  <ListItemAvatar>
                    <Typography variant="body">
                      EPISODE-{list.episode_id}
                    </Typography>
                  </ListItemAvatar>
                  &nbsp;&nbsp;&nbsp;
                  <ListItemText
                    secondary={
                      <Typography variant="body" sx={{fontSize:'large'}}>
                 {`Episode ${RomanConversion(list.episode_id)} - ${list.title}`}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
      </List>
    </>
  );
}
