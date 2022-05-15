const { Permissions } = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'Usado para kickar um usuário',
	category: 'utility',
	permissions : [Permissions.FLAGS.KICK_MEMBERS],
	devOnly: false,
	run: async ({message}) => {
		const user = message.mentions.members.first();
		if (!user) {
			message.reply('Você precisa especificar uma pessoa');
			return;
		} 
		if (user) {
			user.kick('Você foi kickado do server').then(() => {
				message.reply('Usuário kickado com sucesso');
			}).catch(err => {
				message.reply('Não foi possível kickar o usuário');
				console.log(err);
			});
		} else {
			message.reply('Usuário não encontrado no servidor');
		}
	}
};