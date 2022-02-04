const music = require('@koenie06/discord.js-music')
const { Permissions } = require('discord.js')

module.exports = {
    name: "skip",
    description: "Pula para próxima música",
    category: "music",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        if (await music.isConnected({interaction: message})){
            music.skip({interaction: message})
            return message.reply("Música pulada")
        } else {
            return message.reply("Não estou conectado a nenhum canal")
        }
    }
}