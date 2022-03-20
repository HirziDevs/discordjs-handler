module.exports = {
	name: 'choices',
	description: 'Choices Command',
	options: [{
		name: 'choices',
		description: 'Choices List',
		type: 'STRING',
		choices: [{
			name: 'Choice Name 1',
			value: 'choice value 1'
		},
		{
			name: 'Choice Name 2',
			value: 'choice value 2'
		}],
		required: true
	}],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {

		const choices = interaction.options.getString('choices')

		return interaction.reply('Choices Commands Example: ' + choices);
	},
};