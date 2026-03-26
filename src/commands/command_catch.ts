import { Pokemon } from "src/declarations/apiDeclarations.js";
import { State } from "src/state.js";

export async function commandCatch(state: State, name: string) {
    if (!name) {
        console.log("Insert a valid name!");
        return;
    }

    const pokemonData = await state.pokeApi.fetchPokemon(name);

    if (!pokemonData) {
        console.log("\nUnknown pokemon!\n");
        return;
    }

    console.log(`\nThrowing a Pokeball at ${pokemonData.name}...`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (isCaught(pokemonData)) {
        console.log(`${pokemonData.name} was caught\n`);
        state.pokedex[pokemonData.name.toLowerCase()] = pokemonData;
    } 
    else {
        console.log(`${pokemonData.name} escaped\n`);
    }
}

function isCaught(pokemon: Pokemon): boolean {
    const exp = pokemon.base_experience;
    const max_exp = 608;
    const min_exp = 36;

    let chance = (exp - min_exp) / (max_exp - min_exp);

    const seed = Math.random();

    return seed > chance;
}

