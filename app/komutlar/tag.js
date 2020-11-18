
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("**Buyur Tagımız **__Ϟ__** İsmine Yakışıcığına Eminim** <a:tik5:727779124923334696>")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "tag",
  usage: "tag"
};