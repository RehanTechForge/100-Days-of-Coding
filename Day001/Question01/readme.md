# Hello World TypeScript Project

This is a simple TypeScript project that prints "Hello World" to the console.

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes `npm`)
- [TypeScript](https://www.typescriptlang.org/)

## Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Install TypeScript globally**

    ```bash
    npm install -g typescript
    ```

## Running the Project

1. **Compile the TypeScript file**

    ```bash
    tsc
    ```

    This will compile the TypeScript files in the project and generate corresponding JavaScript files in the `dist` folder (or as specified in your `tsconfig.json`).

2. **Run the compiled JavaScript**

    ```bash
    node app.js
    ```

    You should see "Hello World" printed to the console.

## Project Structure

- `app.ts`: The main TypeScript file that contains the "Hello World" code.
- `tsconfig.json`: The TypeScript configuration file.
- `package.json`: The project configuration file containing scripts and dependencies.

## TypeScript Overview

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static typing and other features to enhance developer productivity and code quality.

### Key Benefits

- **Static Typing**: Helps catch errors at compile time rather than runtime.
- **Enhanced IDE Support**: Improved autocompletion, navigation, and refactoring.
- **Modern JavaScript Features**: Supports ES6+ features and beyond.

For more information, check out the [TypeScript documentation](https://www.typescriptlang.org/docs/).

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
