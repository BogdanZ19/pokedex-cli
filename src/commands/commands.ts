import { CLIcommand } from "src/state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export function getCommands(): Record<string, CLIcommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Lists all commands",
            callback: commandHelp,
        }
    };
}



