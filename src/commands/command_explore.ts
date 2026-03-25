import { State } from "src/state.js";

export async function commandExplore(state: State, locationArea: string) {
    if (!locationArea) {
        console.log("Insert a correct location!");
        return;
    }

    const locationData = await state.pokeApi.fetchLocation(locationArea);
    
    if (!locationData) {
        console.log("\nUnknown location!\n");
        return;
    }

    console.log(`Exploring ${locationArea}...`);
    console.log("Found Pokemon:")
    for (const encounter of locationData.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}