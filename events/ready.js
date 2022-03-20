module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Bot is Online!');

        // Bot Status
        client.user.setActivity('Status', { type: 'PLAYING' });
        client.user.setStatus('dnd');
    }
}