const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('subcommand')
        .setDescription('Subcommand')
        .addSubcommand(sub =>
            sub.setName('subcommand')
                .setDescription('A subcommand')
        )
        .addSubcommandGroup(subgroup =>
            subgroup.setName('group')
                .setDescription('A group subcommand')
                .addSubcommand(sub =>
                    sub.setName('subcommandingroup')
                        .setDescription('A subcommand in group')
                )
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()
        const subcommandgroup = interaction.options.getSubcommandGroup()

        if (subcommandgroup) interaction.reply(`group: \`${subcommandgroup}\`, subcommand: \`${subcommand}\``)
        else interaction.reply(`subcommand: \`${subcommand}\``)
    },
}