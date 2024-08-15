import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DefaultSidebar } from "../DefaultSidebar";

// Giả lập component SidebarHome
jest.mock("../../sidebarHome", () => () => (
  <div data-testid="sidebarHome">SidebarHome</div>
));

describe("DefaultSidebar", () => {
  it("renders the SidebarHome component", () => {
    const { getByTestId } = render(
      <DefaultSidebar>
        <div>Test Content</div>
      </DefaultSidebar>
    );

    // Kiểm tra xem SidebarHome có được render
    expect(getByTestId("sidebarHome")).toBeInTheDocument();
  });

  it("renders children passed to it", () => {
    const { getByText } = render(
      <DefaultSidebar>
        <div>Test Content</div>
      </DefaultSidebar>
    );

    // Kiểm tra xem children có được render
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("renders no children when none are passed", () => {
    const { container } = render(<DefaultSidebar />);
    const contentWrapper = container.querySelector(".contentWrapper");

    // Kiểm tra xem contentWrapper không chứa children
    expect(contentWrapper).toBeEmptyDOMElement();
  });

  it("applies correct class names to the div elements", () => {
    const { container } = render(
      <DefaultSidebar>
        <div>Test Content</div>
      </DefaultSidebar>
    );

    const sidebarWrapper = container.querySelector(".sidebarHomeWrapper");
    const contentWrapper = container.querySelector(".contentWrapper");

    // Kiểm tra các class names có được áp dụng đúng
    expect(sidebarWrapper).toBeInTheDocument();
    expect(contentWrapper).toBeInTheDocument();
  });
});
