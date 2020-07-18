module.exports = {
    name: 'kick',
    description: "kick people",
    execute(msg, args, Discord){

        console.log(`${msg.author.tag} has attempted to kick ${(msg.mentions.users.first())}`)
        if (!msg.member.hasPermission("KICK_MEMBERS")) 
        msg.reply('You do not have permissions to do that');
        else{
          const user = msg.mentions.users.first();
          if (user) {
            const member = msg.guild.member(user);
            if (member) {
              member
                .kick('Optional reason that will display in the audit logs')
                .then(() => {
                  msg.reply(`Successfully kicked ${user.tag}`);
                })
                .catch(err => {
                  msg.reply('I was unable to kick the member');
                  console.error(err);
                });
            } else {
              msg.reply("That user isn't in this guild!");
            }
          } else {
            msg.reply("You didn't mention the user to kick!");
          }
        }
    }
  }