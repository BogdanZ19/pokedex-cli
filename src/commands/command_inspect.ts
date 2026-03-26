import { Pokemon } from "src/declarations/apiDeclarations.js";
import { State } from "src/state.js";

export async function commandInspect(state: State, name: string) {
    if (state.pokedex[name].name.toLowerCase() !== name.toLowerCase()) {
        console.log(`\nYou have not caught that pokemon.\n`);
        return;
    }

    printPokemonInfo(state.pokedex[name]);
}


function printPokemonInfo(pokemonData: Pokemon) {
    console.log();
    console.log(`name: ${pokemonData.name}`);
    console.log(`Height: ${pokemonData.height}`);
    console.log(`Weight: ${pokemonData.weight}`);
    console.log("Stats:");
    

    for (const stat of pokemonData.stats) {
        console.log(` - ${stat.stat.name}: ${stat.base_stat}`);
    }

    console.log("Types:");
    for (const type of pokemonData.types) {
        console.log(` - ${type.type.name}`);
    }
    console.log();
}