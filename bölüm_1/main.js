const { Client } = require('discord.js');
const app = new Client({
    disableEveryone: true
});

let prefix = '!'

const { config } = require('dotenv');

config({
    path: __dirname + '/.env'
});

app.on('ready', async () => {
    
    app.user.setActivity(`${prefix}ping`, {type: 'LISTENING'})

    console.log(app.user.username)

});

app.on('message', async message => {

    if (!message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.starsWith(prefix)) return;

});

app.login(process.env.TOKEN)
