
<img src="https://i.imgur.com/6crlGE1.jpg">

# Description
Engel is a message forwarding bot for Telegram that connects to a Discord bot and sends messages to a specific channel using Node.js. The bot connects to Telegram through the user's account using their phone number and currently forwards every message received. However, it is possible to filter the messages by modifying the code. The project is based on the FordwardGram (No longer available) and [Sqble fix](https://github.com/Sqble/Telegram-To-Discord-Bot-Fixed) projects but has support. Just submite an issue.

# [# 🔧] Installation
### Step 1: Install Node.js.
Node.js is required to run the JavaScript code. Download and install the latest version of Node.js from [the official Node.js website](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi). Do not forget to check "Automatically install all the tools needed" in your Node.js installation.

### **Step 2:** Clone the repository.
You can use [git to clone](https://git-scm.com/). Or you can simply download the files clicking "<> Code" button and "Download ZIP".

### Step 3: Getting your Telegram API ID and Hash.
In order to obtain an  **API id**  and develop your own application using the Telegram API you need to do the following:
-   Sign up for Telegram using any application.
-   Log in to your Telegram core:  [https://my.telegram.org](https://my.telegram.org/).
-   Go to  ["API development tools"](https://my.telegram.org/apps)  and fill out the form.
-   You will get basic addresses as well as the  **api_id**  and  **api_hash**  parameters required for user authorization.
-   For the moment each number can only have one api_id connected to it.
We will be sending important developer notifications to the phone number that you use in this process, so please use an up-to-date number connected to your active Telegram account.

### Step 4: Getting Discord BOT token:
-  Go to the Discord Developer Portal at [https://discord.com/developers/applications](https://discord.com/developers/applications) and log in with your Discord account.
- Click the **"New Application"** button and give your application a name.   
- Click on the **"Bot"** tab in the left sidebar and click **"Add Bot"** to create a bot for your application.    
- Give your bot a display name and username, and upload an optional avatar.    
- Under the **"Token"** section, click **"Copy"** to copy the bot's token to your clipboard. Make sure to keep this token secret, as it grants access to your bot's account and could be used to perform malicious actions.    
-  Under the "OAuth2" section, select the "bot" scope and choose the permissions you want your bot to have. You can generate a link to add the bot to a server with these permissions by clicking the "Copy" button under "Scopes".    
-  Paste the link into your web browser and select the server you want to add the bot to. You must have the "Manage Server" permission in the server to add a bot.    
-  Once the bot is added to the server, you can use the token you copied earlier to authenticate your bot and perform actions on behalf of it. You can use a Discord library in your preferred programming language to write your bot's code and interact with the Discord API.

### Step 5: Create .env file.
Create a .env file in the root directory of your project. Yes, just create a file called ".env" - the file has no name, only the extension. Then copy and paste the following code inside of it and replace the variables:
**Make sure to replace the placeholders (<>) with your own values.**
```makefile
DISCORD_TOKEN="<your Discord bot token>"
DISCORD_CHANNEL_ID="<your Discord channel ID>"
SESSION_NAME="<Your Telegram session name. It can be anything. It's just to save the session.>"
API_ID=<your Telegram API ID. Just place THE NUMBER, without "".>
API_HASH="<your Telegram API hash>"
``` 
Example of .env file:
```makefile
DISCORD_TOKEN = "NzA1MjE4ODk3NTY3MDU2MzU1.XqU1iA.6hFbiPqo3d0lPlTnTJH_3OFX6Ug"
SESSION_NAME = "MyTelegramBridge"
API_ID = 9111413
API_HASH = "f68b5ca77b994e6def153e53c9d8827d"
DISCORD_CHANNEL_ID = "1090708007647715499"
```


### Step 6: Run the code
- Open a terminal **in the root directory of your project** and run the following command:
`npm i` to install all dependencies.
- Then run `npm start` to start the bot.

# [# 🔑] Logging in
When you run the program for the first time, you will need to log in. 
1. You should use your phone number for this. Remember to include the country code, such as this number from Brazil (+55)
`+5511998765432`. 
2. Then, enter your password. Like: `COOKIEMONSTER321`. 
3. Finally, you will receive a message within the Telegram application with your login code, for example: `0123321`. Just paste it.
# [# 🧹] Filtering
To receive messages, the `Telegram` class listens for new messages using an event handler. **By default, all received messages will be forwarded to Discord.** You can add filters to the `_handlerNewMessage(event)` method to exclude messages from specific users or channels.
**For example:** if you want to send only messages from a specific sender, you can simply add an if statement:
```js
async _handlerNewMessage(event) {
 if (event.message.senderId.toJSNumber() == "-1001743884666") {
	 await this.discordClient.sendMessage(event.message.message);
 }
}
```
**In this code, -1001743884666 is the senderId.**
PS: Also, you do not need to worry about Discord message 2000 char message limit. The bot will break it down into smaller messages.

# [# 📜] Licence
The project is licensed under GNU GPLv3.
