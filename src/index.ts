import { Bot, InlineKeyboard } from "grammy";
import "dotenv/config";

// Create the bot with your bot token
const bot = new Bot(process.env.BOT_TOKEN || "");

// Start command handler
bot.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard().url(
    "Open Steller Wallet",
    "https://albedo.link/"
  );

  await ctx.reply("Welcome to the bot! Click below to open the web app:", {
    reply_markup: keyboard,
  });
});

bot.on("message", async (ctx) => {
  await ctx.reply("Hello, From Steller Bot");
});

// Start the bot
bot.start();
