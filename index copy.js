const fetch = require("node-fetch");
require("dotenv").config();
const SERVER = process.env.SERVER_URL;
const TOKEN = process.env.TOKEN;
const chat_id = process.env.CHAT_ID;
// (async () => {
//   console.log(SERVER + TOKEN + "/getMe");
//   let response = await fetch(SERVER + TOKEN + "/getUpdates");
//   response = await response.json();
//   console.log(response.result[0].message.chat);
// })();

async () => {
  console.log(SERVER + TOKEN + "/getMe");
  let response = await fetch(SERVER + TOKEN + "/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id,
      text: "Qalesan",
      reply_markup: {
        keyboard: [
          [
            {
              text: "Locationni yuborish",
              request_location: true,
            },
          ],
        ],
      },
    }),
  });
  response = await response.json();
  console.log(response);
};
