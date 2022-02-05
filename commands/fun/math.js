module.exports = {
    name: "math",
    description: "Realiza contar matematicas",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const oper = args.join(" ")
        const result = eval(oper)
        return message.reply(`O resultado é ${result}`)
    }
}