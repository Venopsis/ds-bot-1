//https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/
//https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  });

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(443);

client.login(auth.token);