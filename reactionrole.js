module.exports={
    name: 'reactionrole',
    description: "Sets up a reaction role message for easy roles.",
    execute(message, args, Discord, client){
        const channel= '826269504643530752' 
        const role1=message.guild.roles.cache.find(role => role.name==="Way Too Smart for Walmart")
        const role2=message.guild.roles.cache.find(role => role.name==="Way Too Cool for School")
        const role3=message.guild.roles.cache.find(role => role.name==="Way Too Strong for Ping pong")
    
        const role1Moji='🧠';
        const role2Moji='😎';
        const role3Moji='💪';

        let embed=new Discord.MessageEmbed()
        .setColor('#14d3ff')
        .setTitle('Choose your League!\n\n')
        .setDescription('Choosing a team will open up special channels for you, allowing you to plan with your teammates for the final competition\n')
            + '${role1Moji} for getting Way Too Smart for Walmart'
            + '${role3Moji} for getting Way Too Strong for Ping Pong'
            + '${role2Moji} for getting Way Too Cool for School'
    
            let messageEmbed=await message.channel.send(embed)
            messageEmbed.react(role1Moji)
            messageEmbed.react(role2Moji)
            messageEmbed.react(role3Moji)
        }
}



