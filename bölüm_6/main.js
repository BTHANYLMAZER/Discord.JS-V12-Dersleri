const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require('fs');

const app = new Client({
    disableEveryone: true
})

app.commands = new Collection();
app.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(app);
});

app.on("ready", () => {
    console.log(`${app.user.username} aktif!`);

    app.user.setActivity('Dominik toretto!')

});

app.on("message", async message => {

    let prefix = process.env.PREFIX

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = app.commands.get(cmd);
    if (!command) command = app.commands.get(app.aliases.get(cmd));

    if (command) 
        command.run(app, message, args);
});

app.login(process.env.TOKEN);
