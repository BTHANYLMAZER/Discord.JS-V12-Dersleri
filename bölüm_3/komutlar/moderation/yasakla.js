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

        message.channel.send(`${member} başarılı bir şekilde sunucudan yasaklandı.`)
    }
}
