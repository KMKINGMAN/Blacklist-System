/*
             ________________________________________________
            /                                                \
           |    _________________________________________     |
           |   |                                         |    |
           |   |  KMCODES BlackList System By KINGMAN    |    |
           |   |                                         |    |
           |   |       Devloper ["Muhammad Kurkar"]      |    |
           |   |                                         |    |
           |   |      Phone Number ["+962792914245"]     |    |
           |   |                                         |    |
           |   |      All rights reserved to KIGNAMN     |    |
           |   |                                         |    |
           |   |  If there is any error, just visit the  |    |
           |   |                                         |    |
           |   |        KINGMANDEV Discord Server        |    |
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
       .setTitle(`! KM » KINGMAN`)
       .setDescription(`**Muhammad Kurkar**
       __**I am an undergraduate student from northeastern university**__
       `)
       .addFields(
        { name: '**\📱 PhoneNumber**', value: '+962792914245', inline: false },
        { name: '**\📶 GitHub**', value: '**[click here]( https://github.com/kmkingman )**', inline: false },
        { name: '**\❤️ Discord Server**', value: '**[kinfmandev]( https://discord.gg/kingmandev )**', inline: false },
       )
       .setImage('https://h.top4top.io/p_1873t456n1.png')
       .setFooter('! KM » KINGMAN - KINGMANDEV', 'https://h.top4top.io/p_1873t456n1.png');
       kmsg.channel.send(devloper)

    }
 }
