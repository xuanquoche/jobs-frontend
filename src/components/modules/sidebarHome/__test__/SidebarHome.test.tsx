// SidebarHome.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SidebarHome from "../index";
import "@testing-library/jest-dom";
import Logo from "../../../../assets/icon/Logo.png";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("SidebarHome", () => {
  it("renders logo correctly", () => {
    renderWithRouter(<SidebarHome />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", Logo);
  });

  it("renders sidebar items correctly", () => {
    renderWithRouter(<SidebarHome />);
    const sidebarItems = screen.getAllByRole("button");
    expect(sidebarItems).toHaveLength(6);
  });

  it("navigates to the correct route when sidebar item is clicked", () => {
    renderWithRouter(<SidebarHome />);
    const homeButton = screen.getByText("Home");
    fireEvent.click(homeButton);
    expect(window.location.pathname).toBe("/home");

    const productButton = screen.getByText("Product");
    fireEvent.click(productButton);
    expect(window.location.pathname).toBe("/product");

    const shopButton = screen.getByText("Shop");
    fireEvent.click(shopButton);
    expect(window.location.pathname).toBe("/shop");
  });

  it('logs "not for routes" for items without path', () => {
    const consoleSpy = jest.spyOn(console, "log");
    renderWithRouter(<SidebarHome />);

    const customersButton = screen.getByText("Customers");
    fireEvent.click(customersButton);
    expect(consoleSpy).toHaveBeenCalledWith("not for routes");

    const incomeButton = screen.getByText("Income");
    fireEvent.click(incomeButton);
    expect(consoleSpy).toHaveBeenCalledWith("not for routes");

    const promoteButton = screen.getByText("Promote");
    fireEvent.click(promoteButton);
    expect(consoleSpy).toHaveBeenCalledWith("not for routes");
  });
});
