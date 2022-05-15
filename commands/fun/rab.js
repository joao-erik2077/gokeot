const Canvas = require('canvas');
const Discord = require('discord.js');
const meme = 'https://imgflip.com/s/meme/Running-Away-Balloon.jpg';

const dim = {
	height:1024,
	width:761
};

const p1 = {
	x: 78,
	y: 396
};
const p2 = {
	x: 289,
	y: 831
};
const b1 = {
	x: 536,
	y: 137
};
const b2 = {
	x: 656,
	y: 633
};
const br = {
	x: 50,
	y: 800
};

module.exports = {
	name: 'rab', // Running Away Ballon
	description: 'Template do meme running away balon, pode ter até 3 argumentos, separe os argumentos por |',
	category: 'fun',
	permissions: [],
	devOnly: false,
	run: async ({client, message, args}) => {

		if (!args[0])
			return message.reply('Digite ao menos 1 argumento');

		const templateMessage = args.join(' ').split('|'); // 0 = pessoa; 1 = balão; 2 = balão rosa

		if (templateMessage.length > 3)
			return message.reply('Número máximo de argumentos: 3');
        
		const canvas = Canvas.createCanvas(dim.width, dim.height);
		const ctx  = canvas.getContext('2d');

		ctx.fillStyle = 'black';
		//ctx.textAlign = "center"
		ctx.font = '50px Arial';

		// Desenhando imagem do meme
		const backimg = await Canvas.loadImage(meme);
		ctx.drawImage(backimg, 0, 0);

		const mentions = message.mentions.members;

		if (!mentions.size) {

			ctx.fillText(templateMessage[0], p1.x, p1.y);
			ctx.fillText(templateMessage[0], p2.x, p2.y);

			if (templateMessage.length > 1) {
				ctx.fillText(templateMessage[1], b1.x, b1.y);
				ctx.fillText(templateMessage[1], b2.x, b2.y);
				if (templateMessage.length > 2)
					ctx.fillText(templateMessage[2], br.x, br.y);
			}

			const img = new Discord.MessageAttachment(canvas.toBuffer(), 'running.png');
			return message.channel.send({files: [img]});


		} else { // Caso usuários sejam mencionados
			const mentionsIds = [...mentions.keys()];
			for (let j = 0; j < templateMessage.length; j++) {

				if (mentionsIds.includes(templateMessage[j].replace(/\D+/g, ''))) {
					let user = client.guilds.resolve(message.guild.id).members.resolve(templateMessage[j].replace(/\D+/g, ''));
					let avUser = user.displayAvatarURL({format: 'png', dynamic: 'false', size: 128});
					let img = await Canvas.loadImage(avUser);
					switch (j) {
					case 0:
						ctx.drawImage(img, p1.x-15, p1.y-30);
						ctx.drawImage(img, p2.x-35, p2.y);
						break;
					case 1:
						ctx.drawImage(img, b1.x, b1.y);
						ctx.drawImage(img, b2.x, b2.y);
						break;
					case 2:
						ctx.drawImage(img, br.x-10, br.y);
						break;
					}
				} else {
					switch (j) {
					case 0:
						ctx.fillText(templateMessage[j], p1.x, p1.y);
						ctx.fillText(templateMessage[j], p2.x, p2.y);
						break;
					case 1:
						ctx.fillText(templateMessage[j], b1.x, b1.y);
						ctx.fillText(templateMessage[j], b2.x, b2.y);
						break;
					case 2:
						ctx.fillText(templateMessage[j], br.x, br.y);
						break;
					}

				}
			}

			const img = new Discord.MessageAttachment(canvas.toBuffer(), 'running.png');
			return message.channel.send({files: [img]});
		}

	}
};