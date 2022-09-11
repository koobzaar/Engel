const DotEnv = require("dotenv")
const TelegramConnector = require('./modules/telegram.js');
const DiscordConnector = require("./modules/discord.js");
const ENV = DotEnv.config().parsed;
(async() => {
let discordClient = new DiscordConnector(
    ENV.DISCORD_TOKEN,
    ENV.DISCORD_CHANNEL_ID
)
await discordClient.login();
const telegram = new TelegramConnector(
    ENV.SESSION_NAME, 
    parseInt(ENV.API_ID), 
    ENV.API_HASH,
    discordClient
);
await telegram.login();
})()