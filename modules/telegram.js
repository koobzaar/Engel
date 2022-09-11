const {
    TelegramClient
} = require('telegram');
const {
    NewMessage
} = require('telegram/events');
const input = require('input');


class Telegram {
    constructor(session, apiId, apiHash, DiscordClient) {
        this.client = new TelegramClient(
            session,
            apiId,
            apiHash, {
                connectionRetries: 5,
            }
        );
        this.discordClient = DiscordClient;
        this.sessionName = session;

        this.client.addEventHandler((event)=>{
            console.log(`\x1b[33m[+]\x1b[0m New message from Telegram.`);
            
            this._handlerNewMessage(event)
        }, new NewMessage({}));
    }

    async login() {
        this.client.start({
            phoneNumber: async () => await input.text("[+] Please enter your number: "),
            password: async () => await input.text("[+] Please enter your password: "),
            phoneCode: async () => await input.text("[+] Please enter the code you received: "),
            onError: (err) => console.log(err),
        }).then(() => {
            console.log(`\x1b[32m[+]\x1b[0m Sucessfully logged into Telegram. Session name: ${this.sessionName}`);
        }).catch((err) => {
            console.log(`\x1b[31m[-]\x1b[0m Error while logging into Telegram. Error: ${err}`);
        });
    }
    async _handlerNewMessage(event) {
        /*
            * By default, the client will fordward every message it receives.
            * If you want to filter out messages, you can do so here.
            * For example, you can filter out messages from a specific user or channel.
            *
        */
        await this.discordClient.sendMessage(event.message.message);
    }

}

module.exports = Telegram;