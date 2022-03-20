module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction) {
        if (interaction.isCommand()) {
            if (!interaction.client.commands.has(interaction.commandName)) return;
            try {
                await interaction.client.commands.get(interaction.commandName).execute(interaction.client, interaction);
            } catch (error) {
                console.error(error);

                return interaction.reply({
                    content: 'There is an Error when running this commands!!'
                });
            }
        }
        /*
        isApplicationsCommand
        isCommand
        isAutocomplete
        isMessageComponent

        isButton
        isSelectMenu

        isContextMenu
        isMessageContextMenu
        isUserContextMenu
        */
    }
}