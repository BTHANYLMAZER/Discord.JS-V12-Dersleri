let { MessageEmbed } = require('discord.js');

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

        let embed = new MessageEmbed()
        .setTitle('Sunucudan Atılma')
        .addField('Kullanıcı', `${member} / ID = ${member.id}`)
        .addField('Yetkili', `${message.author.username} / ID = ${message.author.id}`)
        .setColor('RED')
        .setTimestamp()
        .setThumbnail(member.avatarURL)

        message.channel.send(embed)
    }
}
