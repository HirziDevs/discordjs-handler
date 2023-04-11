const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('choices')
        .setDescription('Choices Command')
        .addStringOption(option => 
            option.setName('choices')
                .setDescription('Choices List')
                .setRequired(true)
                .addChoices(
                    { name: 'Choice Name 1', value: 'choice_1' },
                    { name: 'Choice Name 2', value: 'choice_2' }
                )
        ),
    async execute(interaction) {
        const choice = interaction.options.getString('choices')
        return interaction.reply(`choice: \`${choice}\``)
    },
}