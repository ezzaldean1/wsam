const Discord = require('discord.js');
const client = new Discord.Client();
const ez = new Discord.Client();
client.on('ready', () => {
	
 client.user.setGame(' United Server ','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')

var prefix = 'w';
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
const codes = member.guild.channels.get("485527500957548554");//ايدي الشات
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});
  const adminprefix = "w";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const devs = ['470500980342128650'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'setname')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'setavatar')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'setT')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});
const jackeo = ['444902575041675274' , 'هنا ايدي الاونر' , '470500980342128650' , '']; //Jackeo  حقوقي

client.on('message', message => { //Jackeo  حقوقي

var prefix = "w"; //Jackeo  حقوقي

  if (message.author.bot) return; //Jackeo  حقوقي

  if (!message.content.startsWith(prefix)) return; //Jackeo  حقوقي

    var argresult = message.content.split(` `).slice(1).join(' '); //Jackeo  حقوقي

      if (!jackeo.includes(message.author.id)) return; //Jackeo  حقوقي

  let command = message.content.split(" ")[0]; //Jackeo  حقوقي

  command = command.slice(prefix.length); //Jackeo  حقوقي

 //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي

  let args = message.content.split(" ").slice(1);  //Jackeo  حقوقي

 //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي

  if (command === "say")  { //Jackeo  حقوقي

  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **'); //Jackeo  حقوقي

          message.delete() //Jackeo  حقوقي

    message.channel.sendMessage(args.join(" ")).catch(console.error); //Jackeo  حقوقي

  } //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي

   //Jackeo  حقوقي  //Jackeo

if (command == "emb")    { //Jackeo  حقوقي

  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **'); //Jackeo  حقوقي

    let say = new Discord.RichEmbed() //Jackeo  حقوقي

    .setDescription(args.join("  ")) //Jackeo  حقوقي

    .setColor("RANDOM") //Jackeo  حقوقي

    message.channel.sendEmbed(say); //Jackeo  حقوقي

    message.delete(); //Jackeo  حقوقي

  } //Jackeo  حقوقي 

});

ez.on('ready', async() => {

var server = "487737051760951307"; // ايدي السررفر

var channel = "487737051760951309";//ايدي الروم

    setInterval(()=>{

    ez.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')

    },305);

})



ez.login(process.env.BOT_TOKENN);  //


client.login(process.env.BOT_TOKEN);  //
