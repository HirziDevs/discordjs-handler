module.exports = {
	name: 'normal',
	description: 'Normal Command',
	options: [],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {
		return interaction.reply('Slash Commands Example');
	},
};