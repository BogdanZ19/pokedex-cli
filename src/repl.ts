import { createInterface } from "node:readline";
import { commandExit, commandHelp, getCommands } from "./commands.js";


export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(" ");
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });


    rl.prompt();
    rl.on('line', (input) => {
        if (input === "") {
            rl.prompt();
            return;
        }

        const commands = getCommands();
        const words = cleanInput(input);

        if (commands[words[0]]) {
            try {
                commands[words[0]].callback(commands);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Unknown command")
        }
        
        
        rl.prompt();
    });

}