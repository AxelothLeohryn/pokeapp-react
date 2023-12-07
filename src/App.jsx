import { useState, useContext, useEffect } from "react";
import { PokemonContext } from "./context/pokemonContext";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <PokemonContext.Provider value={{ pokemons, setPokemons }}>
        <Header />
        <Main />
        <Footer />
      </PokemonContext.Provider>
    </>
  );
}

export default App;
