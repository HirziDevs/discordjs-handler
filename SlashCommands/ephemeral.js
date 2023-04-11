const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ephemeral')
        .setDescription('Ephemeral message'),
    async execute(interaction) {
        interaction.reply({ content: 'this is a ephemeral message', ephemeral: true })
    },
}