module.exports = async function ModalInteraction(interaction) {
    if (interaction.customId === 'ModalID') {
        interaction.reply({
            content:
                `Input 1: \`${interaction.fields.getTextInputValue('input1')}\`\n` +
                `Input 2: \`${interaction.fields.getTextInputValue('input2')}\``,
            ephemeral: true
        })
    }
}