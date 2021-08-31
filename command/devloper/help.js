const bl = require('../../me-modals/blacklist/blacklisted')
const me = require('../../me-config.json')
const devs = me.dev
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "help",
   category: "devlopers",
   description: "\`لعرض قائمة الاواومر\`",
   run: async (client, kmsg, args, PREFIX) => {
    let commands = kmsg.client.commands.array();
    let EMBED = new MessageEmbed()
    .setTitle(`MeCodes BlackList System`)
    .setDescription(`**[HelpMenu](https://github.com/MeKINGMAN)**`)
    .setColor("GOLD");
    commands.forEach((cmd) => {
        EMBED.addField(
          `**${PREFIX}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          false
        );
      });
    kmsg.channel.send(EMBED)
     
} 
}
