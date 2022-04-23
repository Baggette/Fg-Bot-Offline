const {MessageEmbed} = require('discord.js')
const prettyMilliseconds = require('pretty-ms')
module.exports ={
    name:"ping",
    description:"Free Games bot ping",
    execute(message,args, client){
        const embed = new MessageEmbed()
        .setColor("#2F3136")
        .setAuthor({name:"Free Games Offline", iconURL:"https://cdn.discordapp.com/avatars/698117737175580692/fa6bd8376bcd544b2a577d5c4074530a.webp?size=80"})
        .setTitle("Free Games Offline Bot latency and uptime")
        .addField("Bot latency", `${client.ws.ping}` + 'ms')
        .addField("Bot uptime", `${prettyMilliseconds(client.uptime)}`)
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}