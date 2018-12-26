const Discord = require('discord.js');
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();


console.log("Scrpit By Dream");

client4.on('ready', () => {
  console.log(`Online !`);
 
});

//Bot 4//
client4.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@508264634860699673> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    } 
    if (command ==="<@508264634860699673> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }  
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }  
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });
  

//Bot 6//
client6.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@512717747856080897> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }  
    if (command ==="<@512717747856080897> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }  
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   } 
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });

  //Bot 7//

  client7.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@512718328977031169> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    } 
    if (command ==="<@512718328977031169> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      } 
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   } 
   
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });


client4.on('message', message => {
 
if (message.content === '!start') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
        client4.channels.get("526013675732205579").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
      
        
      }
    }
    
});

client6.on('message', message => {
    // لا تغير شئ عشان ما تخرب الدنيا
 if (message.content === '!start') {
     let count = 0;
     let ecount = 0;
     for(let x = 0; x < 90000; x++) {
         client6.channels.get("526013698435842048").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
         .then(m => {
           count++;
         })
         
       }
     }
     
 });
client7.on('message', message => {
    // لا تغير شئ عشان ما تخرب الدنيا
 if (message.content === '!start') {
     let count = 0;
     let ecount = 0;
     for(let x = 0; x < 90000; x++) {
         client7.channels.get("526013698435842048").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
         .then(m => {
           count++;
         })
         
       }
     }
     
 });



 
client4.login(process.env.TOKEN4);// لا تغير فيها شيء
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);


client5.on('message', function() {
  if (message.content === "!loop") { 
    var interval = setInterval (function () {
        // use the message's channel (TextChannel) to send a new message
        client5.channels.get("526039937804664834").send("!start")
        .catch(console.error); // add error handling here
    }, 1 * 1800000); 
}
});

// لا تغير فيها شيء

