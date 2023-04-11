const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('User Context Menu')
        .setType(ApplicationCommandType.User),
    async execute(interaction) {
        const member = await interaction.guild.members.cache.get(interaction.targetId)

        interaction.reply({
            content: `User ID: \`${member.user.id}\``,
            ephemeral: true
        })
    },
}