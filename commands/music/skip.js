const music = require('@koenie06/discord.js-music');

module.exports = {
	name: 'skip',
	description: 'Pula para próxima música',
	category: 'music',
	permissions: [],
	devOnly: false,
	run: async ({message}) => {
		if (await music.isConnected({interaction: message})){
			music.skip({interaction: message});
			return message.reply('Música pulada');
		} else {
			return message.reply('Não estou conectado a nenhum canal');
		}
	}
};