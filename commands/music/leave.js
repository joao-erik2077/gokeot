const music = require('@koenie06/discord.js-music');

module.exports = {
    name: "leave",
    description: "Faz com que o bot saia do canal",
    category: "music",
    permissions: ["934637943702835310"],
    devOnly: false,
    run: async ({client, message, args}) => {
        music.stop({interaction: message})
        message.reply("Saindo do canal...")
    }
}