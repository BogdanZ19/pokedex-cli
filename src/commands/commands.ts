import { CLIcommand } from "src/state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commpandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

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
        },
        explore: {
            name: "explore",
            description: "Displays the Pokemon found at the specified location (ex: explore pastoria-city-area)",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Try to catch a pokemon (ex: catch pikachu)",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Displays info about a specified pokemon, but only if it was previously caught. (ex: inspect squirtle)",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Displays the names of all the pokemon caught by the user",
            callback: commandPokedex,
        }
    };
}



