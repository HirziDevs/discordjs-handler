const { Modal, TextInputComponent, showModal } = require('discord-modals')

module.exports = {
	name: 'modal',
	description: 'Modal Command',
	options: [],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {
		const title = new TextInputComponent()
			.setCustomId('title')
			.setLabel('Title')
			.setStyle('SHORT')
			.setMinLength(1)
			.setMaxLength(256)
			.setPlaceholder('Embed Title')


		const desc = new TextInputComponent()
			.setCustomId('desc')
			.setLabel('Description')
			.setStyle('LONG')
			.setMinLength(1)
			.setMaxLength(4000)
			.setPlaceholder('Embed Description')
			.setRequired(true)

		const footer = new TextInputComponent()
			.setCustomId('footer')
			.setLabel('Footer')
			.setStyle('SHORT')
			.setMinLength(1)
			.setMaxLength(2048)
			.setPlaceholder('Embed Footer')


		const author = new TextInputComponent()
			.setCustomId('author')
			.setLabel('Author')
			.setStyle('SHORT')
			.setMinLength(1)
			.setMaxLength(256)
			.setPlaceholder('Embed Author')


		const color = new TextInputComponent()
			.setCustomId('color')
			.setLabel('Color(HEX)')
			.setStyle('SHORT')
			.setMinLength(1)
			.setMaxLength(6)
			.setPlaceholder('Embed Color')


		const modal = new Modal()
			.setCustomId('embed')
			.setTitle('Embed Builder')
			.addComponents([author, title, color, desc, footer]);

		try {
			return showModal(modal, { client: client, interaction: interaction })
		} catch (err) {
			console.log(err)
		}
	},
};