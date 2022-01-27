const welcomeChatId = "933731933739958303"
const generateWelcomeImage = require("../util/generateWelcomeImage")

module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const img = await generateWelcomeImage(member)
        member.guild.channels.cache.get(welcomeChatId).send({
            content: `Seja bem vindo <@${member.id}>!!`,
            files: [img]
        })
    }
}