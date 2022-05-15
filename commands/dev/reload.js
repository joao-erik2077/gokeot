module.exports = {
	name: 'reload',
	description: 'Recarrega comandos',
	category: 'dev',
	permissions: [],
	devOnly: true,
	run: async ({client}) => {
		const index = require('../../index.js');
		client.loadCommands(index, true);
	}
};