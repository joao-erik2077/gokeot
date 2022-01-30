var Scraper = require('images-scraper')
const google = new Scraper({
    puppeteer: {
      headless: true
    }
})

module.exports = {
    name: "image",
    description: "Pesquisa uma imagem na internet",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const image_query = args.join(" ")
        if (!image_query) 
            return message.reply("Digite o nome da imagem")
        
        const image_results = await google.scrape(image_query, 1)
        message.reply(image_results[0].url)
    }
}