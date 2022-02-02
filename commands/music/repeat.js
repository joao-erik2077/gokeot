const music = require('@koenie06/discord.js-music');

module.exports = {
    name: "repeat",
    description: "Repete as músicas na queue",
    category: "music",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        if (args[0] === "on")
            var onOrOff = true
        else if (args[0] == "off")
            var onOrOff = false
        else
            return message.reply("Use gk!repeat on/off para ativar ou desativar o loop da queue")
        
        music.repeat({
            interaction: message,
            value: onOrOff
        })

        return args[0] == "on" ? message.reply("Repetição ligada") : message.reply("Repetição desligada")
    }
}