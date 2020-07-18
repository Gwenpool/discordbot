module.exports = {
    name: 'ban',
    description: "bans people",
    execute(msg, args, Discord){

        console.log(`${msg.author.tag} has attempted to ban ${(msg.mentions.users.first().tag)}`)
        if (!msg.member.hasPermission("BAN_MEMBERS")) 
        msg.reply('You do not have permissions to do that');
        else{
          const user = msg.mentions.users.first();
          if (user) {
            const member = msg.guild.member(user);
            if (member) {
              member
                .ban('Optional reason that will display in the audit logs')
                .then(() => {
                  msg.reply(`Successfully banned ${user.tag}`);
                })
                .catch(err => {
                  msg.reply('I was unable to ban the member');
                  console.error(err);
                });
            } else {
              msg.reply("That user isn't in this guild!");
            }
          } else {
            msg.reply("You didn't mention the user to ban!");
          }
        }
    }
  }