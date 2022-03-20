const { MessageButton, MessageSelectMenu, MessageActionRow } = require('discord.js')

module.exports = {
	name: 'components',
	description: 'Components Command',
	options: [{
		name: 'type',
		description: 'Components List',
		type: 'STRING',
		choices: [{
			name: 'Button',
			value: 'button'
		},
		{
			name: 'Select Menu',
			value: 'select menu'
		}],
		required: true
	}],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {

		const type = interaction.options.getString('type')
		let components;

		if (type === 'button') {
			components = new MessageButton()
				.setLabel('Button')
				.setCustomId('button')
				.setStyle('PRIMARY')
			//.setEmoji('EMOJI ID')

			/*
			Button Style List

			PRIMARY
			SECONDARY
			SUCCESS
			DANGER
			LINK

			*/
		} else if (type === 'select menu') {
			components = new MessageSelectMenu()
				.setCustomId('selectmenu')
				.setPlaceholder('Please Select Somethings')
				//.setMinValues(1)
				//.setMaxValues(2)
				.addOptions([{
					label: 'Option 1',
					description: 'Description 1',
					value: 'option_one'
				},
				{
					label: 'Option 2',
					description: 'Description 2',
					value: 'option_two'
				}])
		}

		const row = new MessageActionRow()
			.addComponents(components)

		return interaction.reply({ content: 'Components Example', components: [row] });
	},
};