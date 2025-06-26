import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { z } from "zod";

// 1. Create the server
const server = new McpServer({
  name: "informix-mcp",
  version: "1.0.0",
  description: "Informix MCP server",
});

// 2. Define the tools
server.tool(
  "get-tables", // title
  "Get all tables in the database", // description
  {
    database: z.string().describe("The database to get the tables from"),
  },
  async ({ database }) => {
    return {
      content: [
        {
          type: "text",
          text: "Tables in the database",
        },
      ],
    };
  }
);

// 3. Listen for requests
const transport = new StdioServerTransport();
await server.connect(transport);