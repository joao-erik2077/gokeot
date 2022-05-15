const { Permissions } = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'Usado para banir um usuário',
	category: 'utility',
	permissions: [Permissions.FLAGS.BAN_MEMBERS],
	devOnly: false,
	run: async ({message}) => {
		const user = message.mentions.members.first();
		if (!user) {
			message.reply('Você precisa especificar uma pessoa');
			return;
		} 
		if (user) {
			user.ban({ression: 'Você foi banido do servidor'}).then(() => {
				message.reply('Usuário banido com sucesso');
			}).catch(err => {
				message.reply('Não foi possível banir o usuário');
				console.log(err);
			});
		} else {
			message.reply('Usuário não encontrado no servidor');
		}
	}
};