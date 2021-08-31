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
const Discord = require("discord.js");
const discord = require("discord.js");
const kingman = require("./alive/keep_work.js")
const { MessageEmbed  ,  Collection , Client } = require("discord.js");
const client = new Client()
client.commands = new discord.Collection();
client.eventss = new discord.Collection();
client.aliases = new discord.Collection();
const fs = require('fs');
kingman();
const colors = require("colors");
const TOKEN_BOT = process.env['ME_TOKEN']
const config = require('./me-config.json');
const PREFIX = config.prefix
client.on("error", console.error);
["command", "events"].forEach(p => {
  require(`./me-handler/${p}`)(client);
});
client.on('message', kmsg => {
  const pmention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (kmsg.content.match(pmention)) {
    return kmsg.reply(`**MY PREFIX IS: ${PREFIX}**`)
  }
  if (kmsg.author.bot) return;
  if (!kmsg.guild) {
    return kmsg.reply("**ONLY WORK ON SERVERS NOT DM**")
  }
  let prefix = PREFIX;
const args1 = kmsg.content.slice(prefix.length).split(/ +/);
  if (!kmsg.content.startsWith(PREFIX)) return;
  const args = kmsg.content
    .slice(PREFIX.length)
    .trim() 
    .split(/ +/g); 
  const kmcommand = args.shift().toLowerCase();
  if (kmcommand.length === 0) return;
  let kmcode = client.commands.get(kmcommand);
  if (!kmcode) kmcode = client.commands.get(client.aliases.get(kmcommand));
  if (kmcode) kmcode.run(client, kmsg, args, PREFIX , prefix);
});


client.login(TOKEN_BOT)

