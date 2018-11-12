const Discord = require('discord.js');
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();

client3.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client3.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client3.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@311830569975676929>')
  }
});
client3.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "gc3") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@311830569975676929> ${credits}`);
  }
  if (command === "say") {
    let thingie = args[0]; 
    message.channel.send(`${thingie}`);
    }
  });
//bot 4//

client4.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client4.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client4.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@311830569975676929>')
  }
});
client4.on('message', message => {
  if(message.author.id !== "311830569975676929" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "gc4") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@311830569975676929> ${credits}`);
  }
  if (command === "say") {
    let thingie = args[0]; 
    message.channel.send(`${thingie}`);
    }
  });

client3.on('message', message => {
   // لا تغير شئ عشان ما تخرب الدنيا
  if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
      if(message.author.id !== "311830569975676929" )return; 
    if (message.content === '!stop') {
    let x = 90000
    }
  });
  client4.on('message', message => {
   
    if (message.content === '!spam2') {
        let count = 0;
        let ecount = 0;
        for(let x = 0; x < 90000; x++) {
          message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
            .then(m => {
              count++;
            })
            
          }
        }
        
    });
client5.on('message', message => { 
  let channel = message.channel;
  let roles = message.guild.roles;
  let testRole = roles.find('name', 'Arrans Bot');
  if(message.author.id !== "311830569975676929" )return;
    if (message.content === '!stop') {
      
      channel.overwritePermissions(
      testRole,
         { 'SEND_MESSAGES': false },
                
                
      )
     }
  });
client5.on('message', message => { 
  let channel = message.channel;
  let roles = message.guild.roles;
  let testRole = roles.find('name', 'Arrans Bot');
  if(message.author.id !== "311830569975676929" )return;
    if (message.content === '!start') {
      
      channel.overwritePermissions(
      testRole,
         { 'SEND_MESSAGES': true },
                
                
      )
     }
  });
client5.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "!loop") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("!spam2")
            .catch(console.error); // add error handling here
        }, 1 * 150000); 
    }
});


client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
