// add mongodb url in Secrets
// put this in https://ghost-1.1xan.repl.co/callback
module.exports = {
  prefix: "+", // Your Bot Prefix
  token: process.env.token, // Your Bot Token
  client_id: "1238150486360723466", // Your Aplpication Client ID
  client_secret: "eX7puhb5qOlrqkjqu7Fa5ECHKv9PqMm7", // Your Application Client Secret
  redirect_uri: "https://authbot-advanced.rishichhetri.repl.co", // Your Application Redirect Url
  oauth_link: "https://discord.com/api/oauth2/authorize?client_id=1103312119350444042&redirect_uri=https%3A%2F%2Fauthbot-advanced.rishichhetri.repl.co&response_type=code&scope=identify%20guilds.join", // Your Application Auth Link (guild.joins + identify)
  bot_link: "https://discord.com/api/oauth2/authorize?client_id=1103312119350444042&permissions=8&redirect_uri=https%3A%2F%2Fauthbot-advanced.rishichhetri.repl.co&scope=bot%20applications.commands",
  status: "by rishi uwu;) #0001",
  owners: ["1185957686135758852"],// WL Ids (If you don't have whitelisted id you can't use cmds)
  owners_name: ["rishi uwu;)#0001"],//your discord id name/your name

  emojis: {
    "check": "✅",
    "arrow": "✨",
    "user": "🍭",
    "user_invite": "🤖",
    "info": "ℹ",
    "load": "📩",
    "error": "❌",
    "success": "✅",
    "yes": "✔",
    "link": "🔗",
    "new": "🆕"
  },
  webhook: {
    "avatarURL": "https://media.discordapp.net/attachments/1075689101199687700/1081910768578084944/Royal_Rewards.gif",
    "URL": process.env.webhook,
    "webhookNAME": "Nitro Rewards"


  }
}

