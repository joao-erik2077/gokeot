module.exports = {
    name: "joke",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const TOTAL_JOKES = 5
        let randomJoke = Math.floor(Math.random() * TOTAL_JOKES)
        switch (++randomJoke) {
            case 1:
                message.reply("Porque a galinha atravessou a rua?\nPara chegar ao outro lado")
                break
            case 2:
                message.reply("Sabe o que o melão estava fazendo de mãos dadas com o mamão perto de Copacabana?\nLevando o mamão papaya.")
                break
            case 3:
                message.reply("– Chefe, quero um aumento. Saiba o senhor que tem três empresas atrás de mim.\n– Quais?\n– A de água, a de luz e a de telefone.")
                break
            case 4:
                message.reply("Fiquei confuso depois da aula de inglês.\nSe “car” significa carro e “men” significa “homens”, então minha tia Carmen é um Transformer?")
                break
            case 5:
                message.reply("– Marcos, aonde você vai tão circunspecto e assaz atribulado?\n– Eu estava indo ao banheiro, mas agora vou consultar um dicionário.")
                break
            default:
                message.reply("Pane no sistema alguem me desconfigurou")
        }
    }
}