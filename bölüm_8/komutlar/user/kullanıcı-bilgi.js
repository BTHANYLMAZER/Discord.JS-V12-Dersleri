let { MessageEmbed } = require('discord.js');

module.exports = {

    name: 'kullanıcı-bilgi',
    aliaes: ['userinfo', 'kullanıcıbilgi'],
    category: 'user',

    run: async (app, message, args) => {

        let user = message.mentions.users.first()

        if (!user) {
            return message.channel.send('Kullanıcı belirt.')
        };

        let userEmbed = new MessageEmbed()
        .setAuthor(app.user.username, app.user.displayAvatarURL())
        .addField('İsim', user.username)
        .addField('Kuruluş', user.createdAt)
        .addField('ID', user.id)
        .addField('Tag', '#' + user.discriminator)
        .setColor('RANDOM')
        .setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL())

        message.channel.send(userEmbed)
    }
}
