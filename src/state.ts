import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands/commands.js";

export interface CLIcommand {
    name: string;
    description: string;
    callback: (state: State) => void;
}

export interface State {
    readline: Interface,
    commands: Record<string, CLIcommand>,
}

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const commands = getCommands();
    
    return {
        readline: rl,
        commands: getCommands(),        
    }
}
