/*********************************************\
 * Created By "Teyo's#0525"
 * 18-03-2018
 * Created for Fun by MySelf
 * Library : NodeJS | JavaScript
 * Helping : https://discord.js.org/#/
 /**********************************************/

 
/* =Constante= */
const Discord = require ("discord.js");
const client = new Discord.Client();
const config = require ("./config.json");
const newUsers = new Discord.Collection();

/* =Commande= */
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
;
if(command === "trucker") {
let member = message.author();
if(!member)
member.send("**Test**");
message.delete();
message.channel.send("Grade reçu")
message.delete(4000);
var role = member.guild.roles.find('name', '🚚 Truckers')
member.addRole(role)


}});
/* =Connexion Système= */
client.login(config.token);


