const { getFiles } = require("../../util/functions")
const fs = require("fs")

module.exports = {
    name: "commands",
    category: "utility",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let msg = 'Lembre-se de usar o prefixo "gk!" antes de cada comando!\n\n'
        fs.readdirSync("./commands/").forEach((category) => {
            let commands = getFiles(`./commands/${category}`, ".js")
    
            commands.forEach((f) => {
                msg += `${f.split(".", 1)}\n`
            })
        })
        message.reply(msg)
    }
}