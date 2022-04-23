const {MessageEmbed, MessageSelectMenu} = require('discord.js')
module.exports ={
    name:"source",
    description:"Shows The bot source code",
    execute(message, args, client){
        const embed = new MessageEmbed()
        .setColor('#2F3136')
        .setTitle('Free Games Bot Offline Source code')
        .setURL('https://github.com/Baggette/Fg-Bot-Offline')
        .setAuthor({name:'Free games bot offline', iconURL:'https://cdn.discordapp.com/avatars/698117737175580692/fa6bd8376bcd544b2a577d5c4074530a.webp?size=80', url:'https://github.com/Baggette/Fg-Bot-Offline'})
        .setDescription('This is the source code for the bot and some intsructions on how to host it. \n https://github.com/Baggette/Fg-Bot-Offline')
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }

}