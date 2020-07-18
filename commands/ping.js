module.exports = {
    name: 'ping',
    description: "gives ping",
    execute(msg, args, Discord){
        msg.channel.send('Pinging..')
        .then((msg) => {
            msg.edit(`Ping: ${msg.createdTimestamp - Date.now()} ms`);
    })

}
}