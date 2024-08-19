/* eslint-disable react/react-in-jsx-scope */
import {
  HeaderCustom,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ActionBox,
  AvatarCustom,
  ButtonIconRes,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import { ButtonIcon } from "./style";
import AvartarIcon from "../../../assets/icon/Avatar.png";

export function Header() {
  return (
    <HeaderCustom>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search or type a command"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <ButtonIconRes MuiIconButton-sizeSm>
        <DragHandleIcon />
      </ButtonIconRes>
      <ActionBox>
        <ButtonIconRes>
          <SearchIcon />
        </ButtonIconRes>
        <ButtonIcon data-testid="messageIcon">
          <MessageOutlinedIcon />
        </ButtonIcon>
        <ButtonIcon data-testid="notificationsIcon">
          <NotificationsOutlinedIcon />
        </ButtonIcon>
        <AvatarCustom className="avatar" src={AvartarIcon} alt="Avatar" />
      </ActionBox>
    </HeaderCustom>
  );
}
