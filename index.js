const {Client, Intents, MessageEmbed} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const Prefix = "f!"
const p = "fg"
const fs = require('fs')
const Discord = require('discord.js')
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('Free games offline is online')
    client.user.setPresence({ activities: [{ name: 'Telling people that the free games bot is offline', type: 'PLAYING' }], status: 'active' });
});
client.on('messageCreate', (message) =>{
    if(message.content.toLocaleLowerCase().startsWith(p)){
        const embed = new MessageEmbed()
        .setColor('#2F3136')
        .setTitle('The Free games bot is offline and your command was not ran')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription("You maybe be wondering why the bot is offline and if it will ever come back up, below will be some Q&A")
        .setThumbnail("https://cdn.discordapp.com/avatars/698117737175580692/fa6bd8376bcd544b2a577d5c4074530a.webp?size=80")
        .addFields(
            {name:'Will the bot ever come back online?', value:"Sadly at the moment GameFreak does not have the resources to host the bot"},
            {name:'Why is the bot offline?',value:'Because of the sheer size of free games bot GameFreaks tiny server cannot handle it'},
        )
        .setTimestamp()
        .setFooter({text:"Bot made by Baggette#4777", iconURL:"https://cdn.discordapp.com/avatars/887756464020672523/5261d8f56ece38a54d1e88d3316310b6.webp?size=80"})
        message.channel.send({embeds:[embed]})
    }
});
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}
client.on('messageCreate', (message) => { 
    if (!message.content.startsWith(Prefix) || message.author.bot || message.channelId === "872185514885791796") return;
    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
    if (!client.commands.get(command)) {
        return
    }
    

    client.commands.get(command).execute(message, args, client)

});
client.login(process.env.TOKEN)
