const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

client.on('ready', () => {
  console.log('---------------');
  console.log(' Music Bot Is Online')
  console.log('---------------')
  client.user.setStatus("dnd")
    client.user.setActivity("United Server",{type: 'PLAYING'})
	
});
	
     
	
	
	
client.on('message', msg => {

    if (msg.content == 'wwplay') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
})


 const lol =
[
'**Welcome To United:tanabata_tree: ..**',
'** Welcome to ``United``:rose: **',
'** ``Welcome to Server United``**',
'** Welcome to United**',

]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("481132962969288713");//ايدي الشات
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});
  

client.login(process.env.BOT_TOKEN);  //
