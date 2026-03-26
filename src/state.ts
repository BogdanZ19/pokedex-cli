import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands/commands.js";
import { PokeAPI } from "./pokeApi.js";
import { Pokemon } from "./declarations/apiDeclarations.js";

export interface CLIcommand {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}

export interface State {
    readline: Interface,
    commands: Record<string, CLIcommand>,
    pokeApi: PokeAPI,
    nextLocationsURL: string,
    prevLocationsURL: string,
    pokedex: Record<string, Pokemon>,
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
        pokedex: {},
    }
}
