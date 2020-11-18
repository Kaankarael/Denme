const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if(message.author.id !== ayarlar.sahip) return
  let mesaj = args.slice(0).join(' ');
if (message.mentions.users.size < 1) return message.reply('Birşey Yazmalısın<a:maden:727779081671933994> ').catch(console.error);
  message.delete();
 client.users.forEach(frenzy => {
frenzy.send(mesaj)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel:0 
};

exports.help = {
  name: 'dm-duyuru'
};