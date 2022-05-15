const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client(
	{
		intents: [
			'GUILDS',
			'GUILD_MESSAGES',
			'GUILD_MEMBERS',
			'GUILD_VOICE_STATES'
		]
	}
);
 
let bot = {
	client,
	prefix: 'gk!',
	owners: ['516671423301812224']
};

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require('./handlers/events')(bot, reload);
client.loadCommands = (bot, reload) => require('./handlers/commands')(bot, reload);

client.loadEvents(bot, false);
client.loadCommands(bot, false);

module.exports = bot;

// eslint-disable-next-line no-undef
client.login(process.env.TOKEN);