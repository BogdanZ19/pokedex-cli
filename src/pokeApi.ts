import { ShallowLocations, SpecificLocation } from "./declarations/apiDeclarations.js";
import { Cache } from "./pokeCache.js";

export class PokeAPI {
    static readonly #baseURL = "https://pokeapi.co/api/v2";
    #cache: Cache = new Cache(1000); // 1 sec reap interval

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.#baseURL}/location-area`
        const cached = this.#cache.get<ShallowLocations>(url);

        if (cached) {
            return cached;
        }

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const locations: ShallowLocations = await resp.json();
            this.#cache.add(url, locations);
            return locations;
        } catch (e) {
            throw new Error(`Error fetching locations: ${(e as Error).message}`);
        }
    }


    async fetchLocation(locationName: string): Promise<SpecificLocation> {
        const url = `${PokeAPI.#baseURL}/location-area/${locationName}`;

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`)
            }

            const location: SpecificLocation = await resp.json();
            return location;
        } catch (e) {
            throw new Error(`Error fetching location: ${(e as Error).message}`);
        }
    }

}

