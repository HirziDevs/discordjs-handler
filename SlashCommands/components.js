const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('components')
        .setDescription('Components Command')
        .addStringOption(option => 
            option.setName('component')
                .setDescription('component list')
                .setRequired(true)
                .addChoices(
                    { name: 'Button', value: 'button' },
                    { name: 'Select Menu', value: 'selectmenu' }
                )
        ),
    async execute(interaction) {
        const component = interaction.options.getString('component')

        const row = new ActionRowBuilder()

        switch (component) {
            case 'button':
                row.addComponents(
                    new ButtonBuilder()
                        .setCustomId('ButtonID')
                        .setLabel('Button')
                        .setStyle(ButtonStyle.Primary)
                )
                break;
            case 'selectmenu':
                row.addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('SelectMenuID')
                        .setPlaceholder('Select a Option')
                        .addOptions(
                            new StringSelectMenuOptionBuilder()
                                .setValue('value1')
                                .setLabel('Option 1')
                                .setDescription('Select Option 1'),
                            new StringSelectMenuOptionBuilder()
                                .setValue('value2')
                                .setLabel('Option 2')
                                .setDescription('Select Option 2')
                        )
                )
                break;
            default:
                return interaction.reply({ content: 'No components selected', ephemeral: true })
        }

        return interaction.reply({
            content: `You selected: \`${component}\``,
            components: [row]
        })
    },
}