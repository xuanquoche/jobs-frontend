import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "..";

describe("Header", () => {
  it("renders search input with placeholder", () => {
    render(<Header />);

    const searchInput = screen.getByPlaceholderText("Search or type a command");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders create button", () => {
    render(<Header />);

    const createButton = screen.getByText("+ Create");
    expect(createButton).toBeInTheDocument();
  });

  it("renders message icon", () => {
    render(<Header />);

    const messageIcon = screen.getByTestId("messageIcon");
    expect(messageIcon).toBeInTheDocument();
  });

  it("renders notifications icon", () => {
    render(<Header />);

    const notificationsIcon = screen.getByTestId("notificationsIcon");
    expect(notificationsIcon).toBeInTheDocument();
  });

  it("renders avatar", () => {
    render(<Header />);

    const avatar = screen.getByAltText("Avatar");
    expect(avatar).toBeInTheDocument();
  });
});
