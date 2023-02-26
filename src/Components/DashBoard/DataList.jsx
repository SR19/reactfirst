import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  List,
  useMediaQuery,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Container
} from "@mui/material";
import RomanConversion from '../Utilities/RomanConversion';
import { useTheme } from "@mui/material/styles";

export default function DataList({data, setDataInfo, filterData }) {
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!matches && (
        <List data-testid="sortlist">
          {filterData.length > 0 &&
            filterData.map((list, key) => (
              <>
                <ListItem
                  data-testid={`flaky-test-case-latest-failure-${list.episode_id}`}
                  disablePadding
                  key={key}
                  secondaryAction={
                    <Typography variant="caption">
                      {list.release_date}
                    </Typography>
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
                        <Typography variant="body" sx={{ fontSize: "large" }}>
                          {`Episode ${RomanConversion(list.episode_id)} - ${
                            list.title
                          }`}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
        </List>
      )}
      {matches &&
        filterData.length > 0 &&
        filterData.map((list, key) => (
          <Card sx={{ display: "flex" }}>
            <CardActionArea onClick={(e) => setDataInfo(list)}>
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                  {`Episode ${RomanConversion(list.episode_id)} - ${
                    list.title
                  }`}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="caption">{list.release_date}</Typography>
                </Box>

                {/* <Typography variant="caption">{list.release_date}</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      {data.length === 0 && (
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Container>
            {" "}
            <Typography variant="h6">
              No Data Found, Come back later !
            </Typography>{" "}
          </Container>
        </Box>
      )}
    </>
  );
}
