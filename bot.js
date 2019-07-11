//https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/
//https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b

const Discord = require('discord.js');
const BOT = new Discord.Client();
const auth = require('./auth.json');
const GUILD = new Discord.Guild();

BOT.on("ready", () => {
    console.log(`Logged in as ${BOT.user.tag}!`);
});

BOT.on('message', msg => {
    if (msg.content === '!prune') {
      GUILD.pruneMembers(15,true)
      .then(pruned => console.log(`I just pruned ${pruned} people!`))
      //.then(pruned => console.log(`Following people will be pruned : ${pruned.user}`))
      .catch(console.error);
    }
  });

BOT.login(auth.token);