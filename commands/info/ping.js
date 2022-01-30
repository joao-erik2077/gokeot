module.exports = {
    name: "ping",
    description: "Retorna pong",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Pong")
    }
}