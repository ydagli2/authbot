const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES
  ]
});

const botaccessRoleName = 'BotAccess';

client.on('messageCreate', message => {
  if (message && message.content && message.content.startsWith && message.content.startsWith('+add bot')) {
    if (message.member.roles.cache.some(role => role.name === botaccessRoleName)) {
      const username = message.author.username;
      const filename = username + '.js';
      // create a file with the username as the filename
      // code to create file goes here
      message.author.send('Sure! Your bot has been added. Kindly check DMs :D');
    } else {
      message.reply('You do not have permission to add the bot.');
    }
  }
});

client.login('');
