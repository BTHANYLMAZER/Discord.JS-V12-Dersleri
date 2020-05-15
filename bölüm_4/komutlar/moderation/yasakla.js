let { MessageEmbed } = require('discord.js');

module.exports = {

    name: 'yasakla',
    aliases: 'ban',
    category: 'moderation',

    run: (app, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return;
        
        let user = message.mentions.users.first();
        let member = message.guild.member(user);

        if (!member) return message.channel.send('Kullanıcı belirt.')

        member.ban({
            reason: 'Öyle gerekti.'
        })

        let embed = new MessageEmbed()
        .setTitle('Sunucudan Yasaklanma')
        .addField('Kullanıcı', `${member} / ID = ${member.id}`)
        .addField('Yetkili', `${message.author.username} / ID = ${message.author.id}`)
        .setColor('RED')
        .setTimestamp()
        .setThumbnail(member.avatarURL)

        message.channel.send(embed)

    }
}
