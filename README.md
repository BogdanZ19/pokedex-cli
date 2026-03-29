# Pokedex CLI

An interactive Command Line Interface (CLI) for exploring the world of Pokémon, catching species, and managing your collection. Built with TypeScript and powered by the PokeAPI.

## Features

* Interactive REPL: A seamless "Read-Eval-Print Loop" for a game-like experience.
* Map Navigation: Page through location areas in the Pokémon world.
* Exploration: See which Pokémon inhabit specific locations.
* Catching System: Attempt to catch Pokémon (success based on base experience).
* Local Pokedex: Inspect stats of Pokémon you've caught.
* Performance Caching: Custom cache system to reduce API latency and network usage.

## Installation

1. Clone the repository:
   ```bash
   git clone url
   cd pokedex-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

4. Compile TypeScript:
   ```bash
   npm run build
   ```
## Usage

To start the Pokedex, run the following command:

npm start

### Available Commands

Once the REPL is active, you can use:

* help: Displays the welcome message and all available commands.
* map: Displays the names of 20 location areas. Each subsequent call displays the next 20.
* mapb: Displays the previous 20 location areas.
* explore <area_name>: Lists all the Pokémon found in a specific area.
* catch <pokemon_name>: Shakes the pokeball to try and catch a Pokémon.
* inspect <pokemon_name>: View the height, weight, stats, and types of a caught Pokémon.
* pokedex: Lists the names of all Pokémon you have successfully caught.
* exit: Exits the Pokedex CLI.

## Development

### Directory Structure

* src/main.ts: The application entry point.
* src/repl.ts: Logic for the interactive prompt and input handling.
* src/commands/: Individual modules for each CLI command.
* src/pokeApi.ts: API client for fetching data.
* src/pokeCache.ts: TTL-based caching logic.

### Testing

This project uses Vitest for unit testing.
npm test

## Technologies

* TypeScript
* Node.js
* PokeAPI
* Vitest
