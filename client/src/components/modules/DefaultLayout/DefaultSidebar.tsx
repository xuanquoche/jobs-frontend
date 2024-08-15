/* eslint-disable react/react-in-jsx-scope */
import SidebarHome from "../sidebarHome";
import { SidebarWrapper, ContentWrapper } from "./style";

interface DefaultSidebarProps {
  children?: React.ReactNode;
}

export function DefaultSidebar({ children }: DefaultSidebarProps) {
  return (
    <div className="defaultLayout flex ">
      <SidebarWrapper className="sidebarHomew w-3/12">
        <SidebarHome />
      </SidebarWrapper>
      <ContentWrapper className="contentWrapper">{children}</ContentWrapper>
    </div>
  );
}
