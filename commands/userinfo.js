module.exports = {
    name: 'userinfo',
    description: "displays information about person",
    execute(msg, args, Discord){

let guildMember
        if (args[0]) {
            guildMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]))
            if(!guildMember) guildMember = msg.member
        } else {
            guildMember = msg.member;
        }
        const user = guildMember.user
        const userEmbed = new Discord.MessageEmbed()
        userEmbed.setColor(`#16ffcc`) 
        userEmbed.setTitle("User Info")
        userEmbed.setAuthor(user.tag)
        userEmbed.setDescription(`User information for ${user.tag}\nRoles: ${guildMember.roles.cache.map(r => `${r}`).join('|')}`);
        userEmbed.setThumbnail(user.avatarURL({format: "png", dynamic: "true"}))
        userEmbed.addFields(
            {name: "Username", value: user.username, inline: true},
            {name: "Join date", value: guildMember.joinedAt, inline: true},
            {name: "Created on", value: user.createdAt, inline: true},
            {name: "User ID", value: user.id, inline: true},
            {name: "Discord Tag", value: user.tag, inline: true},
        )
        userEmbed.setFooter(`Requested by: ${msg.author.tag}`);
        msg.channel.send(userEmbed)
    }
}