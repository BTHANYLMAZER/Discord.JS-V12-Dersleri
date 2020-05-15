module.exports = {

    name: 'at',
    aliases: 'kick',
    category: 'moderation',

    run: (app, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) return;
        
        let user = message.mentions.users.first();
        let member = message.guild.member(user);

        if (!member) return message.channel.send('Kullanıcı belirt.')

        member.kick()

        message.channel.send(`${member} başarılı bir şekilde sunucudan atıldı.`)
    }
}
