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
const config = require ("./Commandes/config.json");

/* =Commandes= */

// Dépanneur
const DepCandid = require ("./Commandes/truckers.js");
const CMDparole = require ("./Commandes/parole.js");
const mute = require ("./Commandes/mute.js");

/* =Async Fonction= */
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
});

/* =Démarrage Système= */
client.on("ready", () => {
  client.user.setStatus(`dnd`)
  client.user.setActivity(`Euro Truck Simulator 2 🚚 | +help`, "https://www.twitch.tv/monstercat");
  console.log(`
  =======================================
   Démarrage des Systèmes en cours ...   
   [Système opérationnel]             
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ${client.users.size} Utilisateurs  
      ${client.guilds.size}  Serveurs    
  =======================================
  `)
  client.channels.get("439080704639238164").send("***Démarage des systèmes en cours ...***");
  client.channels.get("439080704639238164").send("`17%`");
  message.edit("`42%`");
  message.edit("`78%`");
  message.edit("`100%`");
  message.edit("**Moteur démarré !");
});

/* =Connexion Système= */
client.login(config.token);
