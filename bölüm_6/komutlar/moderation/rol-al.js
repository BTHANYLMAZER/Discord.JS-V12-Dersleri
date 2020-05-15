module.exports = {

    name: 'rol-al',
    aliases: ['rolal', 'takerole'],
    category: 'moderation',

    run: async (app, message, args) => {
        
        let user = message.mentions.users.first();
        let role = message.mentions.roles.first();
        let member = message.guild.member(user);
        
        if (!user) return message.channel.send('Kullanıcıyı belirt.')
        if (!role) return message.channel.send('Rolü belirt.')

        member.roles.remove(role)
        message.channel.send(`${role} rolü, ${user} adlı kullanıcıdan alındı.`)
        
    }
}
