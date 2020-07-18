module.exports = {
    name: 'server',
    description: "server",
    execute(msg, args, Discord){
        const userEmbed = new Discord.MessageEmbed()
        userEmbed.setColor(`#16ffcc`)
        userEmbed.setTitle("Server Info")
        userEmbed.setAuthor(msg.guild.name, msg.guild.iconURL({format: "png", dynamic: "true"}))
        userEmbed.setDescription(`Welcome to ${msg.guild.name} Enjoy your stay!`)
        userEmbed.setThumbnail(msg.guild.iconURL({format: "png", dynamic: "true"}))
        userEmbed.addFields(
            {name: 'Total Members', value: msg.guild.memberCount, inline: true }, 
            {name: 'Total Humans', value: msg.guild.members.cache.filter(member => !member.user.bot).size, inline: true },
            {name: 'Total Bots', value: msg.guild.members.cache.filter(member => member.user.bot).size, inline: true },
            {name: 'Total Channels', value: msg.guild.channels.cache.filter(c => c.type === 'text').size, inline: true},
            {name: 'Total Roles', value: msg.guild.roles.cache.size, inline: true},
        )
         userEmbed.setFooter(`Requested by: ${msg.author.tag}`);
        msg.channel.send(userEmbed)
    }
}