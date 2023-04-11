const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('command')
        .setDescription('normal command'),
    async execute(interaction) {
        interaction.reply('this is a normal command')
    },
}