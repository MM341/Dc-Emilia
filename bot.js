
const Discord = require('discord.js');


const client = new Discord.Client();


client.on('ready', () => {
  console.log('Online oldum!');
});


client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(ch => ch.name === 'sohbet');

  if (!channel) return;

  channel.send(`Hoşgeldin, ${member}`);
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
      msg.reply('Selam,nasılsın?');
}
});

client.login('nedese');
