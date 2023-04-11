const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Message Context Menu')
        .setType(ApplicationCommandType.Message),
    async execute(interaction) {
        const message = await interaction.channel.messages.fetch(interaction.targetId)

        interaction.reply({
            content: `Message Content: \`${message.content}\``,
            ephemeral: true
        })
    },
}