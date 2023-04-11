const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription('Modal Command'),
    async execute(interaction) {
        interaction.showModal(
            new ModalBuilder()
                .setCustomId('ModalID')
                .setTitle('Modal Example')
                .addComponents(
                    new ActionRowBuilder()
                        .addComponents(
                            new TextInputBuilder()
                                .setCustomId('input1')
                                .setLabel('Input 1 (short)')
                                .setPlaceholder('Enter input 1 here')
                                .setStyle(TextInputStyle.Short)
                                .setRequired(true)
                        ),
                    new ActionRowBuilder()
                        .addComponents(
                            new TextInputBuilder()
                                .setCustomId('input2')
                                .setLabel('Input 2 (paragraph)')
                                .setPlaceholder('Enter input 2 here')
                                .setStyle(TextInputStyle.Paragraph)
                                .setValue('Some Value')
                                .setRequired(false)
                        )
                )
        )
    },
}