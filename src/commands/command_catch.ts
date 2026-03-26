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
    const xp = pokemon.base_experience;
    const res = Math.floor(Math.random() * xp); // res -> [0, exp)

    return res > 40;    
    // 40 is an arbitrary number
    // a pokemon with a base xp of 39 (low) would have a 100% chance of being 
    // caught while one with a higher base p of 63 would have a 65% chance
    // of being caught. picachu (112 base xp) has a 37% chance
}                      


