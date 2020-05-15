let { MessageEmbed } = require('discord.js');

module.exports = {
    
    name: 'şikayet',
    aliases: ['report'],
    category: 'user',

    run: async (app, message, args) => {

        let guildID = '707682045689593916'
        let channelID = '709430697361801315'

        let reaportMessage = args.join(' ')
        if (!reaportMessage) return message.channel.send('Şikayetini belirt!')

        let reaportMessageEmbed = new MessageEmbed()
        .addField('Şikayet', reaportMessage)
        .addField('Kullanıcı', `${message.author.tag} ID = ${message.author.id}`)
        .addField('Sunucu', message.guild.name)
        .addField('Davet', await message.channel.createInvite({ temporary: true }).then(i => i.url))
        .setColor('RED')
        .setFooter('Şikayet Sistemi')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor(app.user.username, app.user.avatarURL())

        message.channel.send('Şikayetiniz başarılı bir şekilde gönderilmiştir.')
        app.guilds.cache.get(guildID).channels.cache.get(channelID).send(reaportMessageEmbed)
    }
}
