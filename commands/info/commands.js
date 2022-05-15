const { getFiles } = require('../../util/functions');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'commands',
	description: 'Exibe uma lista com todos os comandos',
	category: 'info',
	permissions: [],
	devOnly: false,

	run: async({message}) => {
		const commandsEmbed = new MessageEmbed()
			.setColor('#0099ff')
			.setThumbnail('https://cdn-icons-png.flaticon.com/512/0/656.png');

		let msg = '';
		fs.readdirSync('./commands/').forEach((category) => {
			if (category != 'dev') {
				let commands = getFiles(`./commands/${category}`, '.js');
                
				commands.forEach((f) => {
					msg += `${f.split('.', 1)}\n`;
				}); 
			}
		});
		commandsEmbed.addField('Comandos',`${msg}\nUse o comando help para saber sobre um comando específico`,false);
		message.reply({embeds: [commandsEmbed]});
	}
};