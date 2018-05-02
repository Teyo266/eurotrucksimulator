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
let member = message.mentions.members.first();
message.delete();
message.member.send({embed: {
  color: 3447003,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Official Website ► Truckers MP",
  url: "https://truckersmp.com/",
  description: "",
  fields: [{
      name: "🚲 French",
      value: "*Salut toi ! Je te remercie d'avoir les règles du serveur Discord 'Truckers MP'. Tu as désormais accès à une des channels supplémentaires ! N'oublies pas d'aller sur le site lire les règles aussi.  Allez, va t'amuser maintenant ♥"
    },
    {
      name: "Masked links",
      value: "You can put [masked links](http://google.com) inside of rich embeds."
    },
    {
      name: "Markdown",
      value: "You can put all the *usual* **__Markdown__** inside of them."
    }
  ],
  footer: {
    icon_url: client.user.avatarURL,
    text: ""
  }
}
});

message.delete(3000);
console.log(`=> ${message.author.tag} à été validé.`);
var role = message.guild.roles.find('name', '🚚 Truckers')
message.member.addRole(role);


}});
/* =Connexion Système= */
client.login(config.token);


