import { Client, GatewayIntentBits, Partials } from "discord.js";
import { config } from "./config/config.js";
import { Logger } from "./utils/logger.js";
import express from "express";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ],
  partials: [Partials.Channel]
});

// Express Health Check
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.json({ status: "🟢 Bot is running" }));
app.listen(port, () => console.log(`🌐 Health check running on port ${port}`));

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.login(config.token);

// graceful shutdown
process.on("SIGTERM", () => {
  console.log("🔄 SIGTERM received, shutting down...");
  client.destroy();
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🔄 SIGINT received, shutting down...");
  client.destroy();
  process.exit(0);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});
