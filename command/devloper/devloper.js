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
   name: "devlopers",
   category: "devlopers",
   description: "\`لعرض معلومات الاتصال مع المطور\`",
   run: async (client, kmsg, args, PREFIX) => {
       let devloper = new MessageEmbed()
       .setTitle(`! Me » KINGMAN`)
       .setDescription(`**Muhammad Kurkar**
       __**I am an undergraduate student from northeastern university**__
       `)
       .addFields(
        { name: '**\📱 PhoneNumber**', value: '+962792914245', inline: false },
        { name: '**\📶 GitHub**', value: '**[click here]( https://github.com/MeKINGMAN )**', inline: false },
        { name: '**\❤️ Discord Server**', value: '**[MeCodes]( https://discord.gg/2wJqGg3KY8 )**', inline: false },
       )
       .setImage('https://e.top4top.io/p_1965qprez1.gif')
       .setFooter('! Me » KINGMAN - MeCodes', 'https://e.top4top.io/p_1965qprez1.gif');
       kmsg.channel.send(devloper)

    }
 }