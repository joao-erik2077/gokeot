const music = require('@koenie06/discord.js-music');

module.exports = {
	name: 'queue',
	description: 'Irei te dizer a lista de músicas pendentes',
	category: 'music',
	permissions: [],
	devOnly: false,
	run: async ({message}) => {
		console.log(await music.isConnected({interaction:message}));
		if (await music.isConnected({interaction: message}) == false)
			return message.reply('Não estou conectado a nenhum canal');
        
		let queueMsg = '***MÚSICAS PENDENTES***\n';
		const queueArray = await music.getQueue({interaction: message});
		//await console.log(await music.getQueue({interaction: message}))
		for (let i = 0; i < queueArray.length; i++) {
			queueMsg += `***${i+1}*** ${queueArray[i].info.title}\n`;
		}
		message.reply(queueMsg);
	}
};