module.exports = {

    name: 'temizle',
    aliases: ['purge', 'nuke'],
    category: 'moderation',

    run: async (app, message, args) => {
       if (message.deletable) {
           message.delete();
       }

       if (isNaN(args[0]) || parseInt(args[0]) <= 0) return message.channel.send('Miktarı belirt.')

       if (!message.member.hasPermission("MANAGE_MESSAGES")) return;

       let deleteAmount;

       if (parseInt(args[0]) > 100) {
           deleteAmount = 100;
       } else {
           deleteAmount = parseInt(args[0])
       }

       message.channel.bulkDelete(deleteAmount, true).then(deleted => message.channel.send(`${deleted.size} kadar mesaj silindi.`))
    }
}
