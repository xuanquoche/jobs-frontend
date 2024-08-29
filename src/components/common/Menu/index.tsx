import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useNotificationStore } from "../../../hook/store";

export default function MenuCustom() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const notifications = useNotificationStore((state) => state.notifications);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    console.log("notificaiton", notifications);
  }, [notifications]);
  return (
    <div>
      <IconButton
        size="large"
        aria-label="show notifications"
        color="inherit"
        onClick={handleClick}
        className="static"
      >
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="customized-menu"
        aria-labelledby="notification-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="absolute mt-8"
      >
        {notifications.length > 0 ? (
          notifications.map((notification: any) => (
            <MenuItem key={notification.id} onClick={handleClose}>
              {notification.message}
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleClose}>
            <p>You have not any notifications</p>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
