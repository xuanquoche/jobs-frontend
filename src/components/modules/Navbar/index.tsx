import React, { useCallback, useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuCustom from "../../common/Menu"; // Import đúng path đến MenuCustom
import { findingJobs } from "../../../api/Job/findingJobs";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { JobReqBody } from "../../../types/jobs.type";
import ClipLoader from "react-spinners/ClipLoader";
import Avatar from "@mui/material/Avatar";
import { SearchIconWrapper, StyledInputBase, Search } from "./style";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  // search debounce
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState<Boolean>(false);
  const [isShowSearchBox, setIsShowSearchBox] = useState<Boolean>(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const debounceDropDown = useCallback(
    debounce((nextValue) => {
      setKeyword(nextValue);
      setDropdownVisible(true);
    }, 1000),
    []
  );

  const { data, isFetching } = useQuery({
    queryKey: ["search-jobs", keyword],
    queryFn: () => findingJobs({ content: keyword }),
  });

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    debounceDropDown(value);
    setIsShowSearchBox(true);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target as Node)
    ) {
      setIsShowSearchBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Gỡ sự kiện khi component unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowSearchBox]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={() => navigate("/creator/profile")}>
        My account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div style={{ flexGrow: 1, position: "relative" }}>
      <AppBar position="static" sx={{ bgcolor: "#93939f" }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleInputOnChange}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              className="outline-none"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <MenuCustom />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {dropdownVisible && !isFetching && data && isShowSearchBox === true ? (
        <div
          ref={searchBoxRef}
          style={{
            position: "fixed",
            zIndex: "9999",
            top: "52px",
            left: "20%",
            backgroundColor: "#ffffff",
            width: "30%",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            borderRadius: "5px",
          }}
        >
          <ul>
            {data.data.map((job: JobReqBody) => (
              <li key={job._id} className="flex p-2 border-b-2 flex-col">
                <div className="jobName text-xl font-semibold">{job.name}</div>
                <div className="ava">
                  {job.thumbnail !== "" ? (
                    <div className="flex gap-2.5">
                      <Avatar
                        src={job.thumbnail}
                        sx={{ width: "20px", height: "20px" }}
                      />
                      <div className="nameClient font-semibold ">
                        {job.user?.fullname}
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2.5">
                      <Avatar sx={{ width: "20px  ", height: "20px " }}>
                        H
                      </Avatar>
                      <div className="nameClient font-semibold">
                        {job.user?.fullname}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          style={{
            position: "fixed",
            top: "52px",
            left: "20%",
            backgroundColor: "transparent",
            width: "30%",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            borderRadius: "5px",
          }}
        >
          <ClipLoader
            color="grey"
            loading={isFetching}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
}
