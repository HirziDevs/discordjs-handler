module.exports = {
	name: 'subcommand',
	description: 'Sub Command',
	options: [{
		name: 'subcommand',
		description: 'Sub Command',
		type: 'SUB_COMMAND',
	},
	{
		name: 'group',
		description: 'Group Sub Command',
		type: 'SUB_COMMAND_GROUP',
		options: [{
			name: 'command',
			description: 'Sub Command In Group',
			type: 'SUB_COMMAND',
		}],
	}],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {

		const subcommand = interaction.options.getSubcommand()

		return interaction.reply('Sub Commands Example: ' + subcommand);
	},
};