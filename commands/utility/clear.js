const { Permissions } = require("discord.js")

module.exports = {
    name: "clear",
    description: "Usado para limpar as mensagens do chat",
    category: "utility",
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    devOnly: false,
    run: async ({client, message, args}) => {
        if (!args[0])
            return message.reply("Digite com a quantidade de mensagens a serem apagadas")
        if (isNaN(args[0]))
            return message.reply("Digite um número verdadeiro")
        if (args[0] > 100 || args[0] < 1)
            return message.reply("Digite um valor entre 1 e 100")
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })
    }
}