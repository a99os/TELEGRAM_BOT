const TelegramBot = require("node-telegram-bot-api");
const Controllers = require("./controllers");
const { TOKEN, OPTIONS } = require("./config");

const postgres = require("./models/postgres");

(async function start() {
  try {
    const psql = await postgres();

    const bot = new TelegramBot(TOKEN, OPTIONS);

    bot.on("text", (message) =>
      Controllers.MessageController(message, bot, psql)
    );
  } catch (error) {
    console.log(error);
  }
})();
