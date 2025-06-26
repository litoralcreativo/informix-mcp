# Informix MCP Server

An MCP (Model Context Protocol) server for interacting with Informix databases.

## Features

- 🔍 **Database exploration**: Lists all available databases
- 📊 **Table information**: Gets table details including columns and data types
- ⚡ **Custom queries**: Executes custom SQL queries
- 🔗 **Connection testing**: Verifies database connectivity

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd informix-mcp
```

2. Install dependencies:
```bash
pnpm install
```

## Usage

### Development
```bash
pnpm run dev
```

### Production
```bash
pnpm run start
```

## Available Tools

### `get-tables`
Gets all tables in a specific database.

**Parameters:**
- `database` (string): Database name

**Usage example:**
```javascript
// Get tables from database 'mydb'
const tables = await mcp.callTool("get-tables", { database: "mydb" });
```

## Configuration

To use this server with a real Informix database, you'll need to:

1. Install an Informix driver for Node.js
2. Configure connection credentials
3. Implement connection logic in the server

### Recommended Drivers

- `node-odbc` with Informix ODBC driver
- `ibm_db` (official IBM driver)
- `informix` (third-party driver)

## Development

### Project Structure

```
informix-mcp/
├── main.ts                 # Main MCP server
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md             # Documentation
```

## License

ISC 