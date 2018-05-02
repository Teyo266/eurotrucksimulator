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

/* =Commande= */
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 

if(command === "trucker") {
message.delete();
var role = message.guild.roles.find('name', '🚚 Truckers')
if(message.member.roles.has(role))
message.channel.send("You have already confirm the rules.")
else
let member = message.mentions.members.first();
message.channel.send("confirmation");
message.delete(3000);
console.log(`=> ${message.author.tag} à été validé.`);
message.member.addRole(role);


}});
/* =Connexion Système= */
client.login(config.token);


