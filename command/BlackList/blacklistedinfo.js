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
   name: "bl-info",
   category: "Security",
   description: "\`لعرض المعلومات عن الشخص في القائمة البلاكليست\`",
   run: async (client, kmsg, args, PREFIX) => {
       if(!args[0]) {
           return kmsg.reply(`
           > **\⛔ Failed to execute Command ** 
           > **Reason: You must enter the ID **
           `)
       }
    let DATA = await bl.findOne({UserID: args[0]})
    if(!DATA) {
        return kmsg.reply(`
        > **\⛔ Failed to execute Command ** 
        > **Reason: This person is not on the list **
        `)
    }
    let info = new MessageEmbed()
    .setTitle(`INFO`)
    .setDescription(`This is Blacklisted User Info`)
    .setColor("GREEN")
    .addFields(
        { name: '**ID**', value: DATA.UserID, inline: false },
        { name: '**Reason**', value: DATA.Reason, inline: false },
        { name: '**Time**', value: DATA.Time.toISOString().split('T')[0], inline: false },
       )
    kmsg.channel.send(info)



    }
 }