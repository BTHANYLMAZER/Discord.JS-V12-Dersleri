module.exports = {
    name: 'ping',
    aliases: 'p',
    category: 'info',

    run: (app, message, args) => {
        message.channel.send(`Pong!`)
    }
};
