const music = require('@koenie06/discord.js-music');

module.exports = {
    name: "skip",
    description: "Pula para próxima música",
    category: "music",
    permissions: ["934637943702835310"],
    devOnly: false,
    run: async ({client, message, args}) => {
        music.skip({interaction: message})
        message.reply("Música pulada")
    }
}