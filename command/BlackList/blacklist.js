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
   name: "blacklist",
   category: "Security",
   description: "\`لاضافة عضوا الى قائمى البلاكليست\`",
   run: async (client, kmsg, args, PREFIX) => {
    if (!devs.includes(kmsg.author.id)) {
        return kmsg.reply(`
> **\⛔ Failed to execute Command ** 
> **Reason:This Command is only for the bot Owners  **
        `);
    }
    let target = kmsg.mentions.members.first() || kmsg.guild.members.cache.get(args[0])
    if(!target) {
      return kmsg.reply(`
> **\⛔ Failed to execute Command ** 
> ** **
`)

    }
    let reason = args[1]
    if(!reason){
        return kmsg.reply(`
> **\⛔ Failed to execute Command ** 
> **Reason:  Where is the Blacklist Reason **
        `)
    }
    if(devs.includes(target.id)){
        return kmsg.reply(`
> **\⛔ Failed to execute Command ** >
> **Reason:  You cannot use this command on a bot Owners**
        `)
    }
    let DATA = await bl.findOne({
        UserID: target.id
    })
    if(DATA) {
        return kmsg.reply(`
> **\⛔ Failed to execute Command ** 
> **Reason:  This person is already on the Blacklist**
        `)
    }
    if(!DATA){
        DATA = await bl.create({
            UserID: target.id,
            Reason: reason,
            Time: Date.now(),
        })
        DATA.save().catch(e => console.log(e));
    }
    let user = await bl.findOne({
        UserID: target.id
    })
    let me = client.guilds.cache.map(async g=>{
      try {
        g.members.cache.get(user.UserID).ban({ reason: user.Reason }).catch(e);
      } catch(e) {
        console.log(` `)
      }
        
    })
    kmsg.channel.send(`
    > **🌐 ${target} This person has been added to the blacklist **
    > **Reason: ${reason} **
    `)


    }
 }
