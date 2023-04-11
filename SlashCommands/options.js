const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('options')
        .setDescription('List options')
        .addAttachmentOption(option => 
            option.setName('attachment')
                .setDescription('Attachment Option')
                .setRequired(true)
        )
        .addBooleanOption(option => 
            option.setName('boolean')
                .setDescription('Boolean Option')
                .setRequired(true)
        )
        .addChannelOption(option => 
            option.setName('channel')
                .setDescription('Channel Option')
                .setRequired(true)
        )
        .addIntegerOption(option => 
            option.setName('integer')
                .setDescription('Integer Option')
                .setRequired(true)
        )
        .addMentionableOption(option => 
            option.setName('mentionable')
                .setDescription('Mentionable Option')
                .setRequired(true)
        )
        .addNumberOption(option => 
            option.setName('number')
                .setDescription('Number Option')
                .setRequired(true)
        )
        .addRoleOption(option => 
            option.setName('role')
                .setDescription('Role Option')
                .setRequired(true)
        )
        .addStringOption(option => 
            option.setName('string')
                .setDescription('String Option')
                .setRequired(true)
        )
        .addUserOption(option => 
            option.setName('user')
                .setDescription('User Option')
                .setRequired(true)
        )
        .addStringOption(option => 
            option.setName('notrequired')
                .setDescription('Not Required Option')
        ),
    async execute(interaction) {
        console.log(interaction.options.getString('string'))
        console.log(interaction.options.getUser('user'))
        console.log(interaction.options.getMember('user'))
        console.log(interaction.options.getInteger('integer'))
        console.log(interaction.options.getNumber('number'))
        console.log(interaction.options.getBoolean('boolean'))
        console.log(interaction.options.getChannel('channel'))
        console.log(interaction.options.getRole('role'))
        console.log(interaction.options.getMentionable('mentionable'))
        console.log(interaction.options.getString('notrequired'))

        interaction.reply('Options command (see console)')
    },
}