/*
             ________________________________________________
            /                                                \
           |    _________________________________________     |
           |   |                                         |    |
           |   |  MeCodes BlackList System By KINGMAN    |    |
           |   |                                         |    |
           |   |       Devloper ["Muhammad Kurkar"]      |    |
           |   |                                         |    |
           |   |      Phone Number ["+962792914245"]     |    |
           |   |                                         |    |
           |   |      All rights reserved to KIGNAMN     |    |
           |   |                                         |    |
           |   |  If there is any error, just visit the  |    |
           |   |                                         |    |
           |   |         MeCodes Discord Server          |    |
           |   |                                         |    |
           |   |_________________________________________|    |
           |                                                  |
            \_________________________________________________/
                   \___________________________________/
                ___________________________________________
             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- `-_
          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.`-_
       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`__`. .-.-.-.`-_
    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.`-_
 _-'.-.-.-.-.-. .---.-. .-------------------------. .-.---. .---.-.-.-.`-_
:-------------------------------------------------------------------------:
`---._.-------------------------------------------------------------._.---'
*/
const bl = require('../../me-modals/blacklist/blacklisted')
const me = require('../../me-config.json')
const devs = me.dev
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "list-blacklist",
   category: "Security",
   description: "\`لعرض قائمة اعضاء البلاكليست\`",
   run: async (client, kmsg, args, PREFIX) => {
       let users = []
       let data = await bl.find({});
       data.forEach(async d => {
        users.push(`<@!${d.UserID}>`)
       });
       try{
        let embed = new MessageEmbed()
       .setTitle("**Me-Blacklisted**")
       .setAuthor(kmsg.author.tag, kmsg.author.displayAvatarURL({ dynamic: true }))
       .setFooter(kmsg.guild.name, kmsg.guild.iconURL())
       .setThumbnail(kmsg.guild.iconURL())
       .addField(`**BLACKLISTED**`, ` \* ${users.join(`\n \*`)}`)
       .setColor("GREEN")
       kmsg.channel.send({ embed: embed })
       } catch(e){
         kmsg.reply(`**NO BLACKLISTED USERS FOUND**`);
       }
    }
 }