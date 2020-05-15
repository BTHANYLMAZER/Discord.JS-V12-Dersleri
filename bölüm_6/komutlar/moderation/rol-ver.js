module.exports = {

    name: 'rol-ver',
    aliases: ['rolver', 'giverole'],
    category: 'moderation',

    run: async (app, message, args) => {
        
        let user = message.mentions.users.first();
        let role = message.mentions.roles.first();
        let member = message.guild.member(user);
        
        if (!user) return message.channel.send('Kullanıcıyı belirt.')
        if (!role) return message.channel.send('Rolü belirt.')

        member.roles.add(role)
        message.channel.send(`${role} rolü, ${user} adlı kullanıcıya verildi.`)
        
    }
}
