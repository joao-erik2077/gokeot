const music = require('@koenie06/discord.js-music')

module.exports = {
    name: "play",
    description: "Use para ouvir uma música no canal de voz",
    category: "music",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const channel = message.member.voice.channel

        if (!channel)
            return message.reply("Você precisa estar em um canal de voz para usar esse comando")
        const permissions = channel.permissionsFor(message.client.user)
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK"))
            return message.reply("Você não tem permissões para usar esse comando")
        if (!args.length)
            return message.reply("Entre com o nome da musica")

        const song = args.join(" ")

        await music.play({
            interaction: message,
            channel: channel,
            song: song
        })

        const queueArray = await music.getQueue({interaction: message})
        message.reply(`Tocando ***${queueArray[queueArray.length - 1].info.title}***`)
    }
}