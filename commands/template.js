module.exports = {
	name: 'commandname',
	description: 'Command Description',
        options: [],
	async execute(interaction) {
		return interaction.reply({ content: 'This is slash commands!', ephemeral: true });
	},
};
