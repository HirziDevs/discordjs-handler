module.exports = async function AutocompleteInteraction(interaction) {
    if (interaction.commandName === 'autocomplete') {
        const focus = interaction.options.getFocused()
        const items = [
            { name: 'Sword', value: 'sword' },
            { name: 'Pickaxe', value: 'pickaxe' },
            { name: 'Axe', value: 'axe' },
            { name: 'Shovel', value: 'shovel' },
            { name: 'Hoe', value: 'hoe' }
        ]
        const filter = items.filter(item => item.name.toLowerCase().startsWith(focus.toLowerCase()))
        let data = filter.map(item => ({ name: item.name, value: item.value }))
        interaction.respond(data)
    }
}