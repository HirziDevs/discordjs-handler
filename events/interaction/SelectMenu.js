module.exports = async function SelectMenuInteraction(interaction) {
    if (interaction.customId === 'SelectMenuID') {
        interaction.reply({
            content: `Option Selected: \`${interaction.values[0]}\``,
            ephemeral: true
        })
    }
}