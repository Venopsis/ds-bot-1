//https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/
//https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b

const Discord = require('discord.js');
const BOT = new Discord.Client();
const auth = require('./auth.json');

BOT.on("ready", () => {
    console.log(`Logged in as ${BOT.user.tag}!`);
    BOT.user.setStatus("dnd");
});

BOT.on('message', msg => {
    if (msg.content === '!dev') {
      msg.reply(msg.author.tag);
    }
  });

BOT.login(auth.token);