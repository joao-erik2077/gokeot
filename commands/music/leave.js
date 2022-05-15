const music = require('@koenie06/discord.js-music');
const { Permissions } = require('discord.js');

module.exports = {
	name: 'leave',
	description: 'Faz com que o bot saia do canal',
	category: 'music',
	permissions: [Permissions.FLAGS.MOVE_MEMBERS],
	devOnly: false,
	run: async ({message}) => {
		if (await music.isConnected({interaction: message})) {
			music.stop({interaction: message});
			return message.reply('Saindo do canal...');
		} else {
			return message.reply('Eu não estou em nenhum canal');
		}
	}
};