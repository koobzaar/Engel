## [🚀] Description

Engel is a message forwarding bot for Telegram that connects to a Discord bot and sends messages to a specific channel using Node.js. The bot connects to Telegram through the user's account using their phone number and currently forwards every message received. However, it is possible to filter the messages by modifying the code. The project is based on the FordwardGram and Sqble fix projects but has regular updates and support.
[🔑] Environment Variables

To run the project, an .env file must be created and the following environment variables must be set:

```
DISCORD_TOKEN = <your discord bot token type:string>
SESSION_NAME = <your session name - type:string> 
API_ID = <your api id here - type:number>
API_HASH = <your api hash - type:string>
DISCORD_CHANNEL_ID = <your discord channel id - type:string>
```

## [🛠️] Setup

To set up the project, first clone it using

```bash
git clone https://github.com/koobzaar/engel.git
```
Then, install all dependencies using

```bash
npm i
```
Finally, start the bot by running

```bash
npm run start
```

## [📚] Dependencies

The project requires the following dependencies:

- DiscordJS version 14.3.0 or higher
- DotEnv version 16.0.2 or higher
- Input version 1.0.1 or higher
- GramJS (telegram) version 2.11.5 or higher

## [🔧] How to forward from a specific/group of Telegram channel(s)

At modules/telegram.js you can find _handlerNewmessage(event) function. Inside there you can make a validation to only forward to a specific Telegram channelId. You can get the channelId from the message using event.message.peerId.channelId.value.

Also, you can use an array of Telegram ID and check if the message channelId are contained inside to specify multiple channels.

It's recommended to specify all your channelId's at .env, load them and send as a parameter to TelegramConnector class at main.js file.
## [📜] License

The project is licensed under GNU GPLv3.
