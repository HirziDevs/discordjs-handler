const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const config = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const data = []

for (const file of commandFiles) {
  const commandfile = require(`./commands/${file}`);
  client.commands.set(commandfile.name, commandfile);
  data.push({
    name: commandfile.name,
    description: commandfile.description,
    options: commandfile.options
  })
}
once('ready', () => {
  console.log('Ready!');
  client.guilds.cache.get(config.guild)?.commands.set(data)
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  if (!client.commands.has(interaction.commandName)) return;
  try {
    await client.commands.get(interaction.commandName).execute(interaction);
  } catch (error) {
    console.error(error);
    return interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true
    });
  }
});

client.login(config.token);
