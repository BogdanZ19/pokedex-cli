import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(" ");
}

export function startREPL(state: State) {
    state.readline.prompt();
    state.readline.on('line', async (input) => {
        if (input === "") {
            state.readline.prompt();
            return;
        }

        const words = cleanInput(input);
        const commandName = words[0];

        if (state.commands[commandName]) {
            try {
                await state.commands[commandName].callback(state);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log(`\nUnknown command: "${commandName}". Type "help" for a list of commands.\n`)
        }


        state.readline.prompt();
    });

}