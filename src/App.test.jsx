import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PokemonContext } from "./context/pokemonContext";

import App from "./App";
import SearchComponent from "./components/Main/SearchComponent";

describe("App Component", () => {
  it("renders without crashing", () => {
    expect(() =>
      render(
        // Wrap the App component in a Router for testing
        <Router>
          <PokemonContext.Provider
            value={{ pokemons: [], setPokemons: () => {} }}
          >
            <App />
          </PokemonContext.Provider>
        </Router>
      )
    ).not.toThrow();
  });

  it("renders Header and Main components", () => {
    const { getByRole } = render(
      <Router>
        <App />
      </Router>
    );
    const headerElement = getByRole("navigation");
    expect(headerElement).toBeInTheDocument();

    const mainElement = getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
