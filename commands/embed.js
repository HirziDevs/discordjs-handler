const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'embed',
	description: 'Embed Command',
	options: [],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {

		const embed = new MessageEmbed()
			.setTitle('Title')
			.setAuthor({ name: 'Author' })
			.setDescription('Embed Example')
			.addField('Field Name', 'Field Value')
			.setFooter({ text: 'Footer' })
			.setColor('FFFFFF')
		//.setImage('IMAGE LINK')
		//.setThumbnail('IMAGE LINK')

		return interaction.reply({ embeds: [embed] });
	},
};