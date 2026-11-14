
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  throw new Error("BOT_TOKEN is missing. Set it in environment variables.");
}

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🚀 Welcome to AI Builder!\n\nI can help you create Android apps and websites.\n\nChoose a command:\n/createapp - Create Android App\n/createweb - Create Website\n/myprojects - My Projects\n/help - Help"
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🤖 AI Builder Help\n\n/createapp - Android App\n/createweb - Website\n/myprojects - My Projects\n/build - Build App\n/download - Download Files\n\nAI coding engine is coming soon!"
  );
});

bot.onText(/\/createapp/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "📱 Describe the Android app you want to create. Tell me its name and features."
  );
});

bot.onText(/\/createweb/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🌐 Describe the website you want to create. Tell me its name, design and features."
  );
});

bot.onText(/\/myprojects/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "📂 Your project manager will be connected soon."
  );
});

bot.onText(/\/build/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🛠️ Build service is not connected yet. It will be added in the next steps."
  );
});

bot.onText(/\/download/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "📦 Download service is coming soon."
  );
});

bot.on("polling_error", (error) => {
  console.error("Telegram polling error:", error.message);
});

console.log("AI Builder Bot is starting...");
