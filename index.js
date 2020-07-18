const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require ('./config.json');

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(';help')
    .then(presence => console.log(`Activity set to 
    ${presence.activities[0].name}`))
    .catch(console.error);
    });
    
  client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    
    const args = msg.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
	    client.commands.get(command).execute(msg, args, Discord);
} catch (error) {
	console.error(error);
	msg.reply('there was an error trying to execute that command!');
}

});
      

client.login(token);