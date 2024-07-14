import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import logo from "../../../assets/icon/Logo.png";
// React
import { useNavigate } from "react-router-dom";
//Type
import { SidebarType } from "../../../types/sidebar.type";

export default function SidebarHome() {
  const navigate = useNavigate();

  type SidebarItemType = SidebarType[];
  const sidebarList: SidebarItemType = [
    {
      id: 1,
      name: "Home",
      icon: <HomeOutlinedIcon />,
      path: "/home",
    },
    {
      id: 2,
      name: "Product",
      icon: <DiamondOutlinedIcon />,
      path: "/product",
    },
    {
      id: 3,
      name: "Customers",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      id: 4,
      name: "Shop",
      icon: <StorefrontOutlinedIcon />,
      path: "/shop",
    },
    {
      id: 5,
      name: "Income",
      icon: <DonutLargeOutlinedIcon />,
    },
    {
      id: 6,
      name: "Promote",
      icon: <NewReleasesOutlinedIcon />,
    },
  ];

  const handleNavigate = (path?: string) => {
    switch (path) {
      case "/home":
        navigate("/home");
        break;
      case "/product":
        navigate("/product");
        break;
      case "/shop":
        navigate("/shop");
        break;
      default:
        console.log("not for routes");
        break;
    }
  };

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Box sx={{ height: "100vh" }}>
        <List>
          {sidebarList.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText className="sidebarText" primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
