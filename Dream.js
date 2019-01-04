const Discord = require('discord.js');
const client = new Discord.Client();


console.log("Scrpit By Dream");

client.on('ready', () => {
  console.log(`Online !`);
 
});



client.on('message', message => {
 
if (message.content === '!start') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
        client.channels.get("526013675732205579").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
      
        
      }
    }
    
});



 
client.login(process.env.TOKEN);// لا تغير فيها شيء



// لا تغير فيها شيء

