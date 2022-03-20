const fs = require('fs');
const { Client, Collection, Intents, MessageEmbed, MessageActionRow, MessageButton, Formatters } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const yaml = require('js-yaml');

// Modal For discord.js 13
const discordModals = require('discord-modals');
discordModals(client);

// Load Config
const config = yaml.load(fs.readFileSync('./config.yml', 'utf8'));
client.config = config

// Read Commands Files
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const data = []

for (const file of commandFiles) {
    const commandfile = require(`./commands/${file}`);
    client.commands.set(commandfile.name, commandfile);
    data.push({
        name: commandfile.name,
        description: commandfile.description,
        options: commandfile.options,
        default_permission: commandfile.default_permission,
        permissions: commandfile.permissions
    });
}

// Read Events Files
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.once('ready', async () => {

    // Registering and Updating Slash Commands
    console.log('Updating Slash Commands');
    await client.guilds.cache.get(config.guild)?.commands.set(data);

    // Set Slash Commands Permissions

    setTimeout(async () => {
        console.log('Updating Slash Commands permissions');
        const commandData = await client.guilds.cache.get(config.guild)?.commands.fetch();
        const permissions = []

        if (!commandData || commandData.length === 0) return
        data.forEach(async (d) => {
            commandData.forEach(async (cmdData) => {
                if (d.name === cmdData.name) {
                    permissions.push({
                        id: cmdData.id,
                        permissions: d.permissions
                    });
                }
            })
        })

        setTimeout(async () => {
            await client.guilds.cache.get(config.guild)?.commands.permissions.set({ fullPermissions: permissions });

            console.log('Updated ' + permissions.length + ' slash commands');
        }, 2000)
    }, 2000)

})
client.login(config.token);