module.exports = {
	name: 'ready',
	run: async (bot) => {
		console.log(`Logado como ${bot.client.user.tag}`);
	}
};