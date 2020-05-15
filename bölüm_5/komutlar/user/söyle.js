module.exports = {

    name: 'söyle',
    aliases: ['say', 'söle'],
    category: 'user',

    run: (app, message, args) => {
        
        message.delete()

        let say = args.join(' ') // !say Selam dostlar!
        if (!say) return message.channel.send('Cümleyi belirt.')
        message.channel.send(say)

    }
}
