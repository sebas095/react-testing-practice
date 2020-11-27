import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import PokemonCard from "../components/pokemon/pokemon-card";

storiesOf("Pokemon Card", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return (
      <PokemonCard
        name={text("pokemon name", "Bulbasaur")}
        pokemonId={text("pokemon id", "001")}
      />
    );
  });
