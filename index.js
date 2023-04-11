const { Client, Collection, GatewayIntentBits } = require('discord.js');
const chalk = require('chalk');
const yaml = require('js-yaml');
const fs = require('fs');

const LoadCommands = require('./handlers/LoadCommands');
const LoadEvents = require('./handlers/LoadEvents');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.MessageContent,
	]
});

client.config = yaml.load(fs.readFileSync('./config.yml', 'utf8'));
client.slashCommands = new Collection();
client.contextMenus = new Collection();

LoadCommands(client)
LoadEvents(client)

process.on('uncaughtException', function (error) {
	console.log(chalk.yellow(`[${client.config.prefix}] `) + chalk.red('[ANTI CRASH] ') + chalk.green('Found an error!'))
	console.error(error.stack)
})

client.login(client.config.token);