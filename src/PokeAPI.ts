import { ShallowLocations } from "./declarations/apiDeclarations.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const locations: ShallowLocations = await resp.json();
            return locations;
        } catch (e) {
            throw new Error(`Error fetching locations: ${(e as Error).message}`);
        }
    }


    // async fetchLocation(locationName: string): Promise<Location> {
    //     // implement this
    // }

}

