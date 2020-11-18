const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
     let botping = new Date() - message.createdAt;

    let pingembed = new Discord.RichEmbed()
        .setImage("https://cdn.discordapp.com/attachments/699992076644909236/702089075204816956/razer-chroma1.gif")  
        .setColor("RANDOM")
        .addField(' **Bot Ping :** ', Math.floor (botping) + '**__ms__**')
        .setFooter(`Planets Kayıt Ϟ
 `);

  return message.channel.send(pingembed);
      

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};