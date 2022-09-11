const {
    Client,
    GatewayIntentBits
} = require('discord.js');
const discordClient = new Client({
    intents: [GatewayIntentBits.Guilds]
});


class Discord {
    constructor(authToken, userChannelID) {
        this.client = discordClient;
        this.auth = authToken;
        this.channelID = userChannelID;
        this.telegramChannelId = this.userTelegramChannelId
        this.client.on('ready', () => {
            console.info(`\x1b[32m[+]\x1b[0m Discord client logged in as ${this.client.user.tag}!`);
        })
    }
    async login() {
        this.client.login(this.auth);
    }
    async sendMessage(message) {
        if (this._checkIfMessageCanBeForwarded(message)) {
            /*
             *   This is a workaround for the fact that Discord.js doesn't support sending messages to DMs
             */
            console.log(`\x1b[35m[>]\x1b[0m Forwading message to Discord. Content: ${this._truncateLargeMessagesToConsole(message)}`);
            if (message.length > 2000) {
                this.splitLargeMessages(message).then((messageArray) => {
                    messageArray.forEach((message) => {
                        this.client.channels.cache.get(this.channelID).send(message);
                    })
                })
            } else this.client.channels.cache.get(this.channelID).send(message);
        } else {
            console.log(`\x1b[31m[-]\x1b[0m Message cannot be forwarded.`);
        }
    }

    splitLargeMessages(message) {
        /*
         *   This function splits the message into chunks of 2000 characters.
         *   Discord.js doesn't support sending messages longer than 2000 characters.
         */
        let messageArray = [];
        let messageLength = message.length;
        let messageLimit = 2000;
        let messageSplit = messageLength / messageLimit;
        for (let i = 0; i < messageSplit; i++) {
            messageArray.push(message.substring(i * messageLimit, (i + 1) * messageLimit));
        }
        return messageArray;
    }
    _truncateLargeMessagesToConsole(message) {
        if (message.length > 100) {
            return message.substring(0, 100)+"...";
        } else return message;
    }
    /*
     * From now on, there's only message validation.
     */


    _checkIfMessageCanBeForwarded(message) {
        /*
         * If you want to add more checks, you can do it here.
         * For example, you can check if the message is a command. 
         */
        if (
            this._checkIfMessageIsNullUndefinedOrEmpty(message) ||
            this._checkIfMessageHasBlankSpaces(message)
        ) return false;

        else return true;
    }
    _checkIfMessageHasBlankSpaces(message) {
        message.replace(/\s/g, '');
        if (message.length == 0) {
            console.log(`\x1b[31m[-]\x1b[0m Message composed only by blank spaces. Not sending.`);
        } else return false;
    }
    _checkIfMessageIsNullUndefinedOrEmpty(message) {
        if (message == "" || message == null || message == undefined || message.lenght == 0) {
            console.log(`\x1b[31m[-]\x1b[0m Message is null, undefined or empty. Not sending.`);
            return true;
        }
        else return false;
    }

}
module.exports = Discord;