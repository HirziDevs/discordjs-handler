const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'modalSubmit',
    once: false,
    async execute(modal) {
        if (modal.customId === 'embed') {
            const title = modal.getTextInputValue('title')
            const desc = modal.getTextInputValue('desc')
            const footer = modal.getTextInputValue('footer')
            const author = modal.getTextInputValue('author')
            const color = modal.getTextInputValue('color')

            const embed = new MessageEmbed()
            if (title) {
                embed.setTitle(title)
            }
            if (desc) {
                embed.setDescription(desc)
            }
            if (footer) {
                embed.setFooter({ text: footer })
            }
            if (author) {
                embed.setAuthor({ name: author })
            }
            if (color) {
                embed.setColor(color)
            }

            await modal.channel.send({ embeds: [embed] });
            await modal.deferReply({ ephemeral: true })
            modal.followUp({ content: 'Embed Created!', ephemeral: true })
        }
    }
}