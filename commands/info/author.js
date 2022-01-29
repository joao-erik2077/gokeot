const { MessageEmbed, Channel } = require("discord.js")

module.exports = {
    name: "author",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const authorEmbed = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("gokeot")
            .setURL("https://github.com/joao-erik2077/gokeot")
            .setAuthor({ name: "gokeman", iconURL: "https://cdn.discordapp.com/avatars/516671423301812224/16aaf3ba078aa7d1628897374060d87f.webp", url: "https://github.com/joao-erik2077"})
            .setDescription("Um bot criado para aprender de forma divertida")
            .setThumbnail("https://i.pinimg.com/originals/1e/95/5d/1e955db131fe1df6719a9445b94096d2.png")
            .addFields(
                {name: "Github do projeto", value: "https://github.com/joao-erik2077/gokeot", inline: true},

            )
            .setTimestamp()
        
        message.reply({embeds: [authorEmbed]})
    }
}