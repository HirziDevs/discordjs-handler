module.exports = {
	name: 'options',
	description: 'Options Command',
	options: [{
		name: 'string',
		description: 'string options',
		type: 'STRING',
		required: true
	},
	{
		name: 'user',
		description: 'USER options',
		type: 'USER',
		required: true
	},
	{
		name: 'integer',
		description: 'integer options',
		type: 'INTEGER',
		required: true
	},
	{
		name: 'number',
		description: 'number options',
		type: 'NUMBER',
		required: true
	},
	{
		name: 'boolean',
		description: 'boolean options',
		type: 'BOOLEAN',
		required: true
	},
	{
		name: 'channel',
		description: 'channel options',
		type: 'CHANNEL',
		required: true
	},
	{
		name: 'role',
		description: 'role options',
		type: 'ROLE',
		required: true
	},
	{
		name: 'mentionable',
		description: 'mentionable options',
		type: 'MENTIONABLE',
		required: true
	},
	{
		name: 'notrequired',
		description: 'notrequired options',
		type: 'STRING',
		required: false
	}],
	default_permission: true,
	permissions: [],
	async execute(client, interaction) {

		const string = interaction.options.getString('string')
		const user = interaction.options.getUser('user')
		const member = interaction.options.getMember('user')
		const integer = interaction.options.getInteger('integer')
		const number = interaction.options.getNumber('number')
		const boolean = interaction.options.getBoolean('boolean')
		const channel = interaction.options.getChannel('channel')
		const role = interaction.options.getRole('role')
		const mentionable = interaction.options.getMentionable('mentionable')
		const notrequired = interaction.options.getString('notrequired')

		return interaction.reply('Options Commands Example');
	},
};