const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client(
    {
        intents: [
            "GUILDS",
            "GUILD_MESSAGES"
        ]
    }
)

client.on("ready", () => {
    console.log(`Logado como ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Oi") {
        message.reply("Olá")
    }
})

client.login(process.env.TOKEN)