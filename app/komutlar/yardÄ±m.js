const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
  
  const yardım = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail("https://cdn.discordapp.com/attachments/696994607598141460/725422160906289192/yardim-isareti-hareketli-resim-0006.gif")
  
  .setTitle('<a:aquamanloading:728771820781568002> Aquaman Regıster Yardım Komutlar <a:aquamanloading:728771820781568002> ')
  .setAuthor(`${client.user.username}`, client.user.avatarURL)
  .setDescription(`

<a:aquamanmaviloading:758033310680219783>  | **__k!erkek__** : **Erkek Kayıt Yapar**

<a:aquamanmaviloading:758033310680219783>  | **__k!kız__** : **Kız Kayıt Yapar**


`);
  
  
  message.channel.send(yardım);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Yardım.',
  usage: 'bilgi'
};