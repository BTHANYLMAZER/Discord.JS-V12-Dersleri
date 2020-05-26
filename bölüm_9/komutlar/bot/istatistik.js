let { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'istatistik',
    aliases: ['i', 'botdurum', 'bot-durum'],
    category: 'bot',

    run: async (app, message, args) => {

        let messageEmbed = new MessageEmbed()
        .addField('Kullanıcı Sayısı', app.users.cache.size, true)
        .addField('Sunucu Sayısı', app.guilds.cache.size, true)
        .addField('RAM Kullanımı', `${(process.memoryUsage().heapUsed / 1204 / 1024).toFixed(2)}`, true)
        .addField('Versiyon', 'v0.1', true)
        .addField('Kurucu', `<@677193090372599831>`, true)
        .addField('Kuruluş Tarihi', '18.02.2020', true)
        .setThumbnail(app.user.displayAvatarURL())
        .setAuthor(app.user.username, app.user.displayAvatarURL())
        .setFooter('Ders Bot İstatistik Menü')
        .setColor('GREEN')

        message.channel.send(messageEmbed)
    }
}
