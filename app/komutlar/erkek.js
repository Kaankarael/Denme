const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let kayityetkili = "741406282052927500"; //KAYIT YETKİLİSİ ID
  let verbuse = "741406278256951408"; //VERİLECEK ROL ID
  let verbusem = "741406278256951408"; //VERİLECEK ROL ID
  let albuse = "741406280790311082"; //ALINACAK ROL ID
  let isimön = " Ψ  | "; //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
  let isimson = ""; //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN

  //TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if (!message.member.roles.has(kayityetkili))
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `Bu komutu kullanabilmek için <@&716294917327945831> yetkisine sahip olmalısın`
      );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" • ");
  if (!member) return message.channel.send("Komut Başarısız, Lütfen Bir Üye Etiketleyin !");
  if (!isim) return message.channel.send("Komut Başarısız, Bir İsim Yazmalısın ");

  setTimeout(function() {
   member.setNickname(`${isimön}${isim}${isimson}`);
  }, 2000);
  setTimeout(function() {
    member.addRole(verbuse);
    member.addRole(verbusem);
  }, 3000);
  setTimeout(function() {
    member.removeRole(albuse);
   // member.addRole(albusem);
  }, 4000);

  const emoji = client.emojis.find(emoji => emoji.name === "tik");
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      ` <a:loading:728771820781568002>  **Aquaman Sunucusuna Hoşgeldin Beyfendi**  <a:loading:728771820781568002> 

<:Aquaman:771059783490994187>   **|** **Aramıza Katılan Kişi** **:** ${isimön}${isim}${isimson}

<:Aquaman:771059783490994187>   **|** **Kayıt işleminde verilen rol** **:** <@&${verbusem}>

<:Aquaman:771059783490994187>   **|** **Kayıt işleminde alınan rol** **:** <@&${albuse}>
`
    )
    .setFooter(`Kayıtçı : ${message.author.username}`)
  .setImage("https://media.giphy.com/media/xVFw3ecaCoZTlo0Vfw/giphy.gif"
    );
  message.channel.send(embed);
  message.react(emoji);
};

exports.conf = {  
  enabled: true,
  guildOnly: true,
  aliases: ["adam", "e"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: "e <xe nick>"
};
