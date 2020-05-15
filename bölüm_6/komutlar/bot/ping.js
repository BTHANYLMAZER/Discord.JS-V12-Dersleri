module.exports = {
    
    name: 'ping',
    aliases: 'p',
    category: 'bot',

    run: (app, message, args) => {
        message.channel.send(app.ws.ping)
    }
};
