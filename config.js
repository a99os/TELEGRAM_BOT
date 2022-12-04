require("dotenv").config();
// const POSTGRES = process.env.POSTGRES;
// const TOKEN = process.env.TOKEN;
// const chat_id = process.env.CHAT_ID;
// const OPTIONS = {
//   polling: true,
// };
module.exports = {
  POSTGRES: process.env.POSTGRES,
  TOKEN: process.env.TOKEN,
  chat_id: process.env.CHAT_ID,
  OPTIONS: { polling: true },
};
