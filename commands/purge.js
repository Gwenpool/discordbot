module.exports = {
    name: 'purge',
    aliases: ['clear'],
    description: "purges chat",
    execute(msg, args, Discord){

        const deleteCount = parseInt(args[0], 10);
    
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return msg.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        
        async () => { 
        const fetched = await message.channel.messages.fetch({limit: deleteCount});
        msg.channel.bulkDelete(fetched)
          .catch(error => msg.reply(`Couldn't delete messages because of: ${error}`));
      }
    }
}