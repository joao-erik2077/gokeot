const { MessageEmbed } = require('discord.js');
const { getFiles } = require('../../util/functions');
const fs = require('fs');

module.exports = {
	name: 'help',
	description: 'Utilize esse comando para saber a função de outro comando',
	category: 'info',
	permissions: [],
	devOnly: false,
	run: async({message, args}) => {

		fs.readdirSync('./commands/').forEach((category) => {
			if (category != 'dev') {
				let commands = getFiles(`./commands/${category}`, '.js');
    
				commands.forEach((f) => {
					if (f.split('.', 1) == args[0]) {
						const commandSelected = require(`../${category}/${f}`);

						let imgURL = '';
						switch(commandSelected.category) {
						case 'fun':
							imgURL = 'http://cdn.onlinewebfonts.com/svg/img_256194.png';
							break;
						case 'info':
							imgURL = 'http://cdn.onlinewebfonts.com/svg/img_151567.png';
							break;
						case 'utility':
							imgURL = 'http://cdn.onlinewebfonts.com/svg/img_205590.png';
							break;
						case 'music':
							imgURL = 'https://cdn.picpng.com/png/music-note-png-melody-64025.png';
							break;
						default:
							imgURL = 'https://www.pngrepo.com/png/176279/512/command-window.png';
							break;
						}

						const helpEmbed = new MessageEmbed()
							.setColor('#0099ff')
							.setThumbnail(imgURL)
							.setTitle(commandSelected.name)
							.setDescription(commandSelected.description);
						message.reply({embeds: [helpEmbed]});
					}
				});
			}
		});
	}
};