import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PokemonContext } from "../../../context/pokemonContext";
import SearchComponent from './SearchComponent';  // Adjust the import path as needed

describe('SearchComponent', () => {
  it('renders Search component', () => {
    render(
      <PokemonContext.Provider value={{ pokemons: [], setPokemons: () => {} }}>
        <SearchComponent />
      </PokemonContext.Provider>
    );
    // Assuming the Search component has a specific text or role you can query
    expect(screen.getByRole('searchbox')).toBeInTheDocument();  // Adjust this query as per your Search component
  });

  it('renders PokemonList component', () => {
    render(
      <PokemonContext.Provider value={{ pokemons: [], setPokemons: () => {} }}>
        <SearchComponent />
      </PokemonContext.Provider>
    );
    // Assuming the PokemonList component has a specific text or role you can query
    expect(screen.getByTestId('pokemon-list')).toBeInTheDocument();  // Adjust this query as per your PokemonList component
  });
});