import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  FormControl,
  Toolbar,
  InputBase,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  IconButton,
  Menu
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { useTheme } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
}));

export const sortItemList = [
  { index: "None", value: "none" },
  { index: "Episode", value: "episode_id" },
  { index: "Release Date", value: "release_date" },
  { index: "Title A-Z", value: "title" },
  { index: "Title Z-A", value: "desc" },
];

export default function PrimarySearchAppBar({ selectSort, setSelectSort, setSearchQuery }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const mobileMenuId = "primary-search-account-menu-mobile";
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
  };
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
   const renderMobileMenu = (
     <Menu
       anchorEl={mobileMoreAnchorEl}
       anchorOrigin={{
         vertical: "top",
         horizontal: "right",
       }}
       id={mobileMenuId}
       keepMounted
       transformOrigin={{
         vertical: "top",
         horizontal: "right",
       }}
       open={isMobileMenuOpen}
       onClose={handleMobileMenuClose}
     >
       {sortItemList.map((value, key) => (
         <MenuItem key={key}
           onClick={(event) => setSelectSort(value.value)}
         >
           <p>{value.index}</p>
         </MenuItem>
       ))}
     </Menu>
   );
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="navbar">
      <AppBar position="static" sx={{ backgroundColor: "#333536" }}>
        <Toolbar>
          {!matches && (
            <FormControl
              sx={{
                m: 1,
                minWidth: "15%",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                maxHeight: "45px",
                color: "white",
                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    padding: "6px",
                    backgroundColor: "none",
                    border: "none",
                  },
                ".css-rrdfqm-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                  {
                    color: "white",
                  },
              }}
            >
              <InputLabel
                sx={{ color: "white" }}
                id="demo-simple-select-helper-label"
              >
                Sort By
              </InputLabel>
              <Select
                sx={{ color: "white" }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectSort}
                label="Sort By"
                onChange={(event) => setSelectSort(event.target.value)}
              >
                {sortItemList.map((value, key) => (
                  <MenuItem key={key} value={value.value}>
                    {value.index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <SortIcon />
            </IconButton>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
