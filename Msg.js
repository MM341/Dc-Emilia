const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('Pong!');
  }
});

client.login('NTQxMjYyNDM2MzAxNTM3Mjgx.Dz3_MQ.ZE72CnBywyASf5fZLbNfj_8NZ7Y');
