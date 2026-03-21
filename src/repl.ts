import { initState} from "./state.js";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(" ");
}

export function startREPL() {
    let state = initState();

    state.readline.prompt();
    state.readline.on('line', (input) => {
        if (input === "") {
            state.readline.prompt();
            return;
        }

        const words = cleanInput(input);

        if (state.commands[words[0]]) {
            try {
                state.commands[words[0]].callback(state);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("\nUnknown command\n")
        }
        
        
        state.readline.prompt();
    });

}