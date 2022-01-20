const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client(
    {
        intents: [
            "GUILDS",
            "GUILD_MESSAGES",
            "GUILD_MEMBERS"
        ]
    }
)


const welcomeChatId = "933731933739958303"
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChatId).send({
        content: `Seja bem vindo <@${member.id}>!!`,
        files: [img]
    })
})

client.on("ready", () => {
    console.log(`Logado como ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Oi") {
        message.reply("Olá")
    }
})

client.login(process.env.TOKEN)