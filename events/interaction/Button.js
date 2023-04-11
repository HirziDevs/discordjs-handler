module.exports = async function ModalInteraction(interaction) {
    if (interaction.customId === 'ButtonID') {
        interaction.reply({
            content: `Button Clicked! ID: \`${interaction.customId}\``,
            ephemeral: true
        })
    }
}