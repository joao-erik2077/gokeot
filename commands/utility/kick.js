module.exports = {
    name: "kick",
    category: "utility",
    permissions : ["934637943702835310"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const user = message.mentions.members.first()
        if (!user) {
            message.reply("Você precisa especificar uma pessoa")
            return
        } 
        if (user) {
                user.kick("Você foi kickado do server").then(() => {
                    message.reply(`Usuário kickado com sucesso`)
                }).catch(err => {
                    message.reply("Não foi possível kickar o usuário")
                    console.log(err)
                })
        } else {
            message.reply("Usuário não encontrado no servidor")
        }
    }
}