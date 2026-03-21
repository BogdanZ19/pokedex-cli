export interface CLIcommand {
    name: string;
    description: string;
    callback: (commands: Record<string, CLIcommand>) => void;
}

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

export function commandExit() {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}

export function commandHelp(commands: Record<string, CLIcommand>) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n")
    for (const command of Object.values(commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
}