import { config } from "../config/config.js";

export class Logger {
  static log(level, message, data = {}) {
    const timestamp = new Date().toISOString();
    const logData = Object.keys(data).length > 0 ? " | " + JSON.stringify(data) : "";
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}${logData}`);
  }

  static info(message, data = {}) {
    this.log("info", message, data);
  }

  static warn(message, data = {}) {
    this.log("warn", message, data);
  }

  static error(message, data = {}) {
    this.log("error", message, data);
  }

  static async logToDiscord(client, embed) {
    if (!config.enableLogging || !config.logChannelId) return;
    try {
      const logChannel = await client.channels.fetch(config.logChannelId);
      await logChannel.send({ embeds: [embed] });
    } catch (error) {
      this.error("Failed to log to Discord:", { error: error.message });
    }
  }
}
