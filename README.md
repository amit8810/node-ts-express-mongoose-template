# TypeScript + Node.js + Express + Mongoose Project Setup Boilerplate

### 1. Setup Node.js Project
1. **Create a new directory for your project**:
    ```bash
    mkdir my-backend-project
    ```
2. **Navigate into the project directory**:
    ```bash
    cd my-backend-project
    ```
3. **Initialize a new Node.js project**:
    ```bash
    npm init -y
    ```

### 2. Install TypeScript and Other Dependencies
- **Install core dependencies**:
    ```bash
    npm install express mongoose
    ```
- **Install development dependencies**:
    ```bash
    npm install --save-dev typescript @types/node @types/express @types/mongoose ts-node nodemon
    ```

### 3. Setup TypeScript Configuration
1. **Initialize TypeScript configuration**:
    ```bash
    npx tsc --init
    ```
2. **Update the `tsconfig.json` file** with the following configuration:
    ```json
    {
      "compilerOptions": {
        "target": "ES6",
        "module": "ESNext",
        "moduleResolution": "node",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true
      },
      "ts-node": {
        "esm": true,
        "experimentalSpecifierResolution": "node"
      },
      "include": ["src"],
      "exclude": ["node_modules"]
    }
    ```

### 4. Configure `nodemon` to Use `ts-node`
1. **Create a `nodemon.json` file** in the root directory with the following content:
    ```json
    {
        "watch": ["src"],
        "ext": "ts",
        "exec": "ts-node ./src/index.ts",
        "ignore": ["dist"]
    }
    ```

### 5. Update the `package.json` Scripts
- **Modify the `scripts` section** in `package.json`:
    ```json
    {
      "name": "typescript_nodejs_setup",
      "version": "1.0.0",
      "main": "index.js",
      "type": "module",
      "scripts": {
        "start": "node dist/index.js",
        "build": "tsc",
        "dev": "nodemon --watch src --ext ts --exec \"node --loader ts-node/esm src/index.ts\""
      },
      "dependencies": {
        "dotenv": "^16.4.5",
        "express": "^4.19.2",
        "mongoose": "^8.5.3"
      },
      "devDependencies": {
        "@types/express": "^4.17.21",
        "@types/mongoose": "^5.11.97",
        "@types/node": "^22.3.0",
        "nodemon": "^3.1.4",
        "ts-node": "^10.9.2",
        "typescript": "^5.5.4"
      }
    }
    ```

### 6. Setup Project Structure
- **Organize your project as follows**:
    ```
    src/
    ├── index.ts
    ├── routes/
    ├── models/
    ├── controllers/
    ```
- **Explanation**:
    - `src/`: The main source code directory.
    - `routes/`: Handles routing and API endpoints.
    - `models/`: Defines the MongoDB schemas.
    - `controllers/`: Contains business logic and request handling.

### 7. Running the Project
- **In development mode**:
    ```bash
    npm run dev
    ```
- **Compile and run for production**:
    ```bash
    npm run build
    npm start
    ```

### 8. Optional Enhancements
- **Environment Variables**: Use `dotenv` to manage environment variables.
- **Linting and Formatting**: Add ESLint and Prettier for code quality.
- **Testing**: Set up Jest for unit and integration testing.
- **Git**: Create a `.gitignore` file to exclude `node_modules`, `dist`, and other unnecessary files.
- **Logging**: Implement `morgan` for request logging.
- **Error Handling**: Add a basic error-handling middleware.
