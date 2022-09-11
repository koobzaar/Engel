
# Engel
Easy forward your Telegram messages.
## Description
Engel is a Telegram message forwarding bot. It connects to a Discord bot and send it to a specific channel using NodeJS.
Currently, it does not support Telegram bots - it connects though your account using your phone number.
Also, it will forward every message you receive. But you can filter it by changing some code.

It is based on FordwardGram [kkapuria3 project](https://github.com/Sqble/Telegram-To-Discord-Bot-Fixed) and [Sqble fix](https://github.com/Sqble/Telegram-To-Discord-Bot-Fixed), but with regular update and support.

## Environment Variables

To run this project, you will need to create an `.env` file and setup these current envoriment variables:
```
DISCORD_TOKEN = <your discord bot token type:string>
SESSION_NAME = <your session name - type:string> 
API_ID = <your api id here - type:number>
API_HASH = <your api hash - type:string>
DISCORD_CHANNEL_ID = <your discord channel id - type:string>
```

## Setup

Clone the project using 

```bash
git clone https://github.com/koobzaar/engel.git
```

Install all dependencies using 
```bash
npm i
```


Start using
```bash
npm run start
```
## Dependencies

- DiscordJS version 14.3.0 or higher
- DotEnv version 16.0.2 or higher
- Input version 1.0.1 or higher
- GramJS (telegram) version 2.11.5 or higher

## How to forward from a specific/group of Telegram channel(s)

At `modules/telegram.js` you can find `_handlerNewmessage(event)` function. Inside there you can make a validation to only forward to a specific Telegram channelId. You can get the channelId from the message using `event.message.peerId.channelId.value`.

Also, you can also use an array of Telegram ID and check if the message channelId are contained inside to specify multiple channels.

It's recommended to specify all your channelId's at `.env`, load them and send as a parameter to `TelegramConnector` class at `main.js` file.


## License

[MIT](https://choosealicense.com/licenses/mit/)

