import { ShallowLocations } from "src/declarations/apiDeclarations.js";
import { State } from "src/state.js";

export async function commpandMapForward(state: State) {
    const locations = await state.pokeApi.fetchLocations(state.nextLocationsURL);
    
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    printLocations(locations);
}

export async function commandMapBack(state: State) {
    const locations = await state.pokeApi.fetchLocations(state.prevLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    printLocations(locations);
}

function printLocations(locations: ShallowLocations) {
    for (const location of locations.results) {
        console.log(location.name);
    }
}