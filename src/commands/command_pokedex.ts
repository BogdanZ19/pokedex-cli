import { State } from "src/state.js";

export async function commandPokedex(state: State) {
    if (Object.keys(state.pokedex).length === 0) {
        console.log(`\nYou did not catch any pokemon.\n`);
        return;
    }

    console.log("\nYour pokemon:");
    for (const pokemon of Object.values(state.pokedex)) {
        console.log(` - ${pokemon.name}`);
    }
    console.log();
}