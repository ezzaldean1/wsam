const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
    client.user.setGame(` United Server `, "http://twitch.tv/Streammingg")

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
'** __حياك ومنور سيرفر يونايتد__**',
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
