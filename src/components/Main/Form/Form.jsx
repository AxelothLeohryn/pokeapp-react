import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { PokemonContext } from "../../../context/pokemonContext";

const Form = () => {
  const { pokemons, setPokemons } = useContext(PokemonContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Check if a Pokemon with the same ID already exists
    const idAlreadyExists = pokemons.some((pokemon) => pokemon.id === data.id);

    if (idAlreadyExists) {
      // If ID exists, show a toast error and do not add the new Pokemon
      toast.error(`A Pokemon with ID ${data.id} already exists.`);
    } else {
      // If ID does not exist, proceed to add the new Pokemon
      //Store the new pokemon data in the same format as the real pokemons from the API, so I can seamlessly reuse the same code to render cards, etc.
      const newPokemon = {
        id: data.id,
        name: data.name,
        sprites: {
          other: {
            "official-artwork": {
              front_default: data.img,
            },
          },
        },
        types: [
          { type: { name: data.typeOne } },
          ...(data.typeTwo ? [{ type: { name: data.typeTwo } }] : []), // Corrected to spread into array if exists
        ],
      };

      setPokemons([newPokemon, ...pokemons]);
      toast.success("Pokemon created successfully!");
    }
  };

  const onError = (errors) => {
    if (errors.id) {
      if (errors.id.type === "required") {
        toast.error("Please enter an ID");
      } else if (errors.id.type === "min") {
        toast.error("ID must be at least 1293");
      }
    }

    if (errors.name) {
      if (errors.name.type === "required") {
        toast.error("Name is required");
      } else if (errors.name.type === "minLength") {
        toast.error("Name must be at least 3 characters long");
      }
    }

    if (errors.img) {
      if (errors.img.type === "required") {
        toast.error("Image URL is required");
      }
    }

    if (errors.typeOne) {
      if (errors.typeOne.type === "required") {
        toast.error("Your pokemon must have a type");
      }
    }
  };

  return (
    <>
      <div id="create-title-banner">
        <div id="create-title">
          <img id="create-title-icon" src="/icons/pokeball.svg" />
          <h1>PokeLab</h1>
        </div>
        <h5>Create a new Pokemon.</h5>
      </div>
      <form id="create-form" onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          placeholder="Pokedex ID (minimum 1293)"
          id="id"
          {...register("id", { required: true, min: 1293 })}
          type="number"
        />

        <input
          placeholder="Name"
          id="name"
          {...register("name", { required: true, minLength: 3 })}
          type="text"
        />

        <input
          placeholder="Image URL"
          id="img"
          {...register("img", { required: true })}
          type="text"
        />
        <div id="create-types">
          <select id="typeOne" {...register("typeOne", { required: true })}>
            <option value="">Type one</option>
            <option value="bug">Bug</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="electric">Electric</option>
            <option value="fairy">Fairy</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="ghost">Ghost</option>
            <option value="grass">Grass</option>
            <option value="ground">Ground</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="steel">Steel</option>
            <option value="water">Water</option>
          </select>

          <select id="typeTwo" {...register("typeTwo")}>
            <option value="">Type 2 (optional)</option>
            <option value="bug">Bug</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="electric">Electric</option>
            <option value="fairy">Fairy</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="ghost">Ghost</option>
            <option value="grass">Grass</option>
            <option value="ground">Ground</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="steel">Steel</option>
            <option value="water">Water</option>
          </select>
        </div>

        <input id="create-submit" type="submit" value="Create Pokemon" />
      </form>
      <Toaster position="bottom-center" />
    </>
  );
};

export default Form;
