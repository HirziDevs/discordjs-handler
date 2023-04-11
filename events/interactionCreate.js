const SelectMenuInteraction = require('./interaction/SelectMenu');
const ButtonInteraction = require('./interaction/Button');
const ChatInputInteraction = require('./interaction/ChatInput');
const ModalInteraction = require('./interaction/Modal');
const ContextMenuInteraction = require('./interaction/ContextMenu');
const AutocompleteInteraction = require('./interaction/Autocomplete');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (interaction.isChatInputCommand()) await ChatInputInteraction(interaction)
		else if (interaction.isStringSelectMenu()) await SelectMenuInteraction(interaction)
		else if (interaction.isButton()) await ButtonInteraction(interaction)
		else if (interaction.isModalSubmit()) await ModalInteraction(interaction)
		else if (interaction.isContextMenuCommand()) await ContextMenuInteraction(interaction)
		else if (interaction.isAutocomplete()) await AutocompleteInteraction(interaction)
	},
};