import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands/commands.js";
import { PokeAPI } from "./pokeApi.js";

export interface CLIcommand {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
}

export interface State {
    readline: Interface,
    commands: Record<string, CLIcommand>,
    pokeApi: PokeAPI,
    nextLocationsURL: string,
    prevLocationsURL: string,
}

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    
    return {
        readline: rl,
        commands: getCommands(),        
        pokeApi: new PokeAPI(),
        nextLocationsURL: "",
        prevLocationsURL: "",
    }
}
