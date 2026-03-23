import { CLIcommand } from "src/state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commpandMapForward, commandMapBack } from "./command_map.js";

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
        },
        map: {
            name: "map",
            description: "Displays the next page of locations",
            callback: commpandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous page of locations",
            callback: commandMapBack,
        }
    };
}



