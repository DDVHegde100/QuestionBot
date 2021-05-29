const Discord=require('discord.js'); 
const client=new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs=require('fs')
client.commands= new Discord.Collection();
client.events=new Discord.Collection();
const prefix= '!';

['command_handler', 'event_handler'].forEach(handler =>{
    require('./handlers/${handler}'(client, Discord))
})


client.on('ready', ()=>{ 
    console.log('Ready to be Big Brain'); 
})

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args=message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command==='rules'){
        const Discord = require('discord.js');

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ffe600')
	.setTitle('Rules!')
	.setURL('https://www.youtube.com/channel/UCPeyAH7qKM4AyFdMVHHArjg')
	.setDescription('You have to follow these rules, or you will be muted.')
	.addFields(
		{ name: 'Rule 1', value: 'No being mean' },
		{ name: 'Rule 2', value: 'No Spamming' },
		{ name: 'Rule 3', value: 'No NSFW things'},
		{ name: 'Rule 4', value: 'Not Bot Spam in Non-bot channels'}
	)
    message.channel.send(exampleEmbed)
    }
    if(command==='help'){
        const Discord = require('discord.js');

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0100ff')
	.setTitle('All the Commands!')
	.setURL('https://quantum.qoom.space/')
	.setDescription('Here are all the Commands you can use for this bot:')
	.addFields(
		{ name: '!rules', value: 'This can be used to see the main rules.' },
		{ name: '!ping', value: 'See Ping Latency' },
		{ name: '!number', value: 'No NSFW things'},
		{ name: '!hi', value: 'Say Hi!'},
        { name: '!image', value: 'Find an image on the Internet!'},
	)
    message.channel.send(exampleEmbed)
    }
    
if(command === 'ping'){
    message.channel.send('Pong!');
}else if( command == 'hi'){
    message.channel.send('γεια σας!')
}else if( command == 'image'){
    message.channel.send('γεια σας!')
}


});

client.login('ODQ2NjkyNDI4NTU1NDg1MTg1.YKzNxQ.icsXKLbIbS2XKxUSMItIm8WiLew');