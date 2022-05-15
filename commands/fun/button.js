const Canvas = require('canvas');
const Discord = require('discord.js');
const meme = 'http://pm1.narvii.com/6605/3cd669c24d89589241b7bb9a93386019b8ccb971_00.jpg';

const dim = {
	height: 491,
	width: 338
};

module.exports = {
	name: 'button',
	description: 'Meme do botão. Passe entre 2 a 3 argumentos separados por |',
	category: 'fun',
	permissions: [],
	devOnly: false,
	run: async ({client, message, args}) => {
		if (!args[0])
			return message.reply('Digite ao menos 1 argumento');

		const templateMessage = args.join(' ').split('|'); // 0 = botão esquerdo; 1 = botão direito; 2 = personagem

		if (templateMessage.length > 3)
			return message.reply('Passe no máximo 3 argumentos');
		else if (templateMessage.length < 2)
			return message.reply('Passe no minimo 2 argumentos');

		const canvas = Canvas.createCanvas(dim.width, dim.height);
		const ctx = canvas.getContext('2d');

		ctx.fillStyle = 'black';
		ctx.font = '20px Arial';

		const backImg = await Canvas.loadImage(meme);
		ctx.drawImage(backImg, 0, 0);

		const mentions = message.mentions.members;
		const mentionsIds = [...mentions.keys()];

		for (let j = 0; j < templateMessage.length; j++) {
			if (mentionsIds.includes(templateMessage[j].replace(/\D+/g, ''))) {
				let user = client.guilds.resolve(message.guild.id).members.resolve(templateMessage[j].replace(/\D+/g, ''));
				let avUser = user.displayAvatarURL({format: 'png', dynamic: 'false', size: 96});
				let img = await Canvas.loadImage(avUser);

				switch (j) {
				case 0:
					ctx.drawImage(img, 60, 60);
					break;
				case 1:
					ctx.drawImage(img, 180, 25);
					break;
				case 2:
					ctx.drawImage(img, 120, 290);
					break;
				}
			} else {
				switch (j) {
				case 0:
					ctx.fillText(templateMessage[j], 60, 70);
					break;
				case 1:
					ctx.fillText(templateMessage[j], 160, 55);
					break;
				case 2:
					ctx.fillText(templateMessage[j], 150, 440);
					break;
				}
			}
		}

		const img = new Discord.MessageAttachment(canvas.toBuffer(), 'running.png');
		return message.channel.send({files: [img]});

	}
};