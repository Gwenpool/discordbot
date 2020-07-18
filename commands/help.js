module.exports = {
    name: 'help',
    description: "helps",
    execute(msg, args, Discord){

const userEmbed = new Discord.MessageEmbed()
        userEmbed.setColor(`#16ffcc`)
        userEmbed.setTitle("Commands & Help")
        userEmbed.setDescription(`Various commands`)
        userEmbed.addFields(
            {name: '**;SERVER**', value: '*Displays server information*'},
            {name: '**;USERINFO @x**', value: '*Displays member information*'},
            {name: '**;PING**', value: '*Shows clients latency*'},
            {name: '**;KICK**', value: '*Take a guess*'},
            {name: '**;BAN**', value: '*Try it out*'}
        )
        userEmbed.setFooter(`Requested by: ${msg.author.tag}\nContact daniel.#0137 regarding bugs`);
    msg.channel.send(userEmbed)
        }
    }