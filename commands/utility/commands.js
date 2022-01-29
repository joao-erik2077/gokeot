const { getFiles } = require("../../util/functions")
const fs = require("fs")
const { MessageEmbed, Channel } = require("discord.js")

module.exports = {
    name: "commands",
    category: "utility",
    permissions: [],
    devOnly: false,

    run: async({client, message, args}) => {
        const commandsEmbed = new MessageEmbed()
            .setColor("#0099ff")
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/0/656.png")

            let msg = ""
            fs.readdirSync("./commands/").forEach((category) => {
                let commands = getFiles(`./commands/${category}`, ".js")
                
                commands.forEach((f) => {
                    msg += `${f.split(".", 1)}\n`
                })
            })
            commandsEmbed.addField("Comandos",msg,false)
            message.reply({embeds: [commandsEmbed]})
    }
}