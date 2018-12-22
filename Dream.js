const Discord = require('discord.js');
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


console.log("Scrpit By Dream");

client.on('ready', () => {
  console.log(`Online !`);
 
});

//Bot 4//
client4.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@"+client.id+"> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
    if (command ==="<@"+client.id+">say") {
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
  
//Bot 5//
client5.on('message', message => {
  if(message.author.id !== "510806679898554370" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "<@"+client5.id+"> gc") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@510806679898554370> ${credits}`);
  }
  if (command ==="<@"+client5.id+">say") {
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
  if (command === "<@"+client6.id+"> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
    if (command ==="<@"+client6.id+">say") {
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
client5.on('message', message => {
   // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!start') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
        client5.channels.get("526013698435842048").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
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


 
client4.login(process.env.TOKEN4);// لا تغير فيها شيء
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);

// لا تغير فيها شيء

