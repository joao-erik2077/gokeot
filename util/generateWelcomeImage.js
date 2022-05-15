const Canvas = require('canvas');
const Discord = require('discord.js');

const background = 'https://img.wallpapic-br.com/i8122-445-729/medium/galaxia-espaco-sideral-universo-nebulosa-imagem-de-fundo.jpg';

const dim = {
	height: 675,
	width: 1200,
	margin: 50
};

const av = {
	size: 256,
	x: 480,
	y: 170
};

const generateImage = async (member) => {
	let username = member.user.username;
	let discriminator = member.user.discriminator;
	let avatarURL = member.user.displayAvatarURL({format: 'png', dynamic: 'false', size: av.size});

	const canvas = Canvas.createCanvas(dim.width, dim.height);
	const ctx  = canvas.getContext('2d');

	// imagem do background
	const backimg = await Canvas.loadImage(background);
	ctx.drawImage(backimg, 0, 0);

	// caixa preta
	ctx.fillStyle = 'rgba(0,0,0,.8)';
	ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin);

	// avatar
	const avimg = await Canvas.loadImage(avatarURL);
	ctx.save();

	ctx.beginPath();
	ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0 ,Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	ctx.drawImage(avimg, av.x, av.y);
	ctx.restore();

	// escrevendo na imagem
	ctx.fillStyle = 'white';
	ctx.textAlign = 'center';
	// mensagem de bem vindo
	ctx.font = '50px Arial';
	ctx.fillText('Seja Bem Vindo', dim.width/2, dim.margin + 70);
	// username
	ctx.font = '60px Arial';
	ctx.fillText(`${username}#${discriminator}`, dim.width/2, dim.height - dim.margin - 125);
	// ao servidor
	ctx.font = '40px Arial';
	ctx.fillText('Ao Servidor', dim.width/2, dim.height - dim.margin - 50);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');
	return attachment;
};

module.exports = generateImage;