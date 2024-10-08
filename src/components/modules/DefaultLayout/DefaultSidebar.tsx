/* eslint-disable react/react-in-jsx-scope */
import SidebarHome from "../sidebarHome";
import { SidebarWrapper, ContentWrapper } from "./style";

interface DefaultSidebarProps {
  children?: React.ReactNode;
}

export function DefaultSidebar({ children }: DefaultSidebarProps) {
  return (
    <div className="defaultLayout flex h-full">
      <SidebarWrapper className="sidebarHomew w-3/12">
        <SidebarHome />
      </SidebarWrapper>
      <ContentWrapper className="contentWrapper flex-1 ">
        {children}
      </ContentWrapper>
    </div>
  );
}
