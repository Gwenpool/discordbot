module.exports = {
    name: 'options',
    description: "will display a uniform option",
    execute(msg, args, Discord){

        const fetch = require('node-fetch');
        const querystring = require('querystring');

  if (!args.length) {
    return message.channel.send('You need to supply a search term!');
  }

	const query = querystring.stringify({ term: args.join(' ') });

    async () => {
    const { list } = await fetch(`https://raw.githubusercontent.com/FutureFightFlair/futurefightflair.github.io/master/uniforminfo/images/uniform/${query}.jpg`)({ format: "png", dynamic: true }).then(response => response.json());
    message.channel.send(file);
}


    }
}