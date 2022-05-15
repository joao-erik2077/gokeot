module.exports = {
	name: 'ping',
	description: 'Retorna pong',
	category: 'info',
	permissions: [],
	devOnly: false,
	run: async ({message}) => {
		message.reply('Pong');
	}
};