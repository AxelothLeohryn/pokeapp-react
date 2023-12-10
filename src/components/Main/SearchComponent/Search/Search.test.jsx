import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Search from "./Search"; // Replace with your actual component

describe("Search", () => {
  it('has an input with the placeholder text "Search"', () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
});
