const music = require('@koenie06/discord.js-music');

module.exports = {
	name: 'repeat',
	description: 'Repete as músicas na queue',
	category: 'music',
	permissions: [],
	devOnly: false,
	run: async ({message, args}) => {
		if (await !music.isConnected({interaction: message}))
			return message.reply('Eu não estou tocando nenhuma música');

		let onOrOff;
		if (args[0] === 'on' && !await music.isRepeated({interaction: message}))
			onOrOff = true;
		else if (args[0] == 'off' && await music.isRepeated({interaction: message}))
			onOrOff = false;
		else
			return message.reply('Use gk!repeat on/off para ativar ou desativar o loop da queue');

        
        
		music.repeat({
			interaction: message,
			value: onOrOff
		});

		return onOrOff ? message.reply('Repetição ligada') : message.reply('Repetição desligada');
	}
};