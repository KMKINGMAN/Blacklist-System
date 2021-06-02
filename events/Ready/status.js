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
const colors = require("colors");
const figlet = require('figlet');
module.exports = {
	name: 'ready',
async	execute(client) {
    figlet('KINGMAN', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.brightRed)
    });
    client.user.setPresence({
      status: 'online',
      activity:{
        name:'KINGMAN ANTICOPYPASTER SYSTEM',
        type:'STREAMING',
        url: 'https://www.twitch.tv/kingman4hack'
      }
    })
	}
}