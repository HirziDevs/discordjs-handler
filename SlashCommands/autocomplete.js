const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('Auto Complete option')
        .addStringOption(option => 
            option.setName('option')
                .setDescription('Auto Complete Option')
                .setAutocomplete(true)
                .setRequired(true)
        ),
    async execute(interaction) {
        const option = interaction.options.getString('option')

        interaction.reply(`Option: \`${option}\``)
    },
}