module.exports = class Controllers {
  static async MessageController(message, bot, psql) {
    const chat_id = message.chat.id;
    const text = message.text;
    console.log(psql);

    const user = await psql.users.findOne({
      where: {
        chat_id: chat_id,
      },
    });

    if (!user) {
    }

    bot.sendMessage(chat_id, text);
  }
};
