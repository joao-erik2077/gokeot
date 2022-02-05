const generateWelcomeImage = require("../util/generateWelcomeImage")

module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const welcomeChatId = member.guild == "939558267414253580" ? "939563961303588924" : "933731933739958303"
        const img = await generateWelcomeImage(member)
        member.guild.channels.cache.get(welcomeChatId).send({
            content: `Seja bem vindo <@${member.id}>!!`,
            files: [img]
        })
    }
}