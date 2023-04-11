const { ActivityType } = require('discord.js');
const chalk = require('chalk');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(chalk.yellow(`[${client.config.prefix}] `) + chalk.cyan('[BOT] ') + chalk.green('Bot is up!'))

        client.user.setActivity('Status', { type: ActivityType.Playing });
        client.user.setStatus('dnd');
	},
};