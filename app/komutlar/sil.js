const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Ne yazıkki bu komutu kullanmaya yetkiniz yok!`)
      .setFooter(client.user.username, client.user.avatarURL);

    
    message.channel.send(embed);
    return;
  }
  const sayi = args.slice(0).join('');
 
 
 
if(sayi.length < 1) {
 
  return message.reply("Silmem İçin Bir Miktar Belirt <a:aquamantik1:758707821947781160> ")
 
} else {
  
 
  message.channel.bulkDelete(sayi);
 
message.channel.send("__**" + sayi + "**__ **Mesajı Başarıyla Uzaya Fırlattım**   <a:aquamantik1:758707821947781160> ").then(msg => {
 
        msg.delete(5000)
 
});
 
}
 
 
 
 
 
};
 
 
 
exports.conf = {
 
  enabled: true,
 
  guildOnly: false,
 
  aliases: [],
 
  permLevel: 0
 
};
 
 
 
exports.help = {
 
  name: 'sil',
 
  description: 'Belirtilen miktarda mesaj siler',
 
  usage: 'sil <miktar>'
 
};