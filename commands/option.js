module.exports = {
    name: 'option',
    description: 'Option Command',
    options: [{
        name: 'input',
        type: 'STRING',
	description: 'String Options',
    }]
    async execute(interaction) {
        const value = interaction.options.getString('input');
	if (value) return interaction.reply(value);
	return interaction.reply({ content: 'No option was provided!', ephemeral: true });
        
        //More info about options: https://discordjs.guide/interactions/replying-to-slash-commands.html#parsing-options
        
    },
};
