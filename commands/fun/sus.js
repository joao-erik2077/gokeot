const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "https://sm.ign.com/t/ign_br/screenshot/default/1599647767-244123-1599647831-noticia-normal_4mf9.h928@3:4.jpg"

const dim = {
    height:928,
    width:696
}
const av = {
    size: 300,
    x:40,
    y:280
}

module.exports = {
    name: "sus",
    description: "Use esse comando para se tornar um verdadeiro impostor",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const avatarURL = message.member.user.displayAvatarURL({format: "png", dynamic: "false", size: av.size})
        const username = message.member.user.username

        const canvas = Canvas.createCanvas(dim.width, dim.height)
        const ctx  = canvas.getContext("2d")

        const backimg = await Canvas.loadImage(background)
        ctx.drawImage(backimg, 0, 0)

        const avimg = await Canvas.loadImage(avatarURL)
        ctx.drawImage(avimg, av.x, av.y)

        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.font = "90px Arial"
        ctx.fillText(`${username} sus`, dim.width/2, dim.height - 150)

        const img = new Discord.MessageAttachment(canvas.toBuffer(), "sus.png")
        message.channel.send({files: [img]})
    }
}