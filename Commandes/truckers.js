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
;
if(command === "trucker") {
  let parameter = message.content.split(' '); //split the given parameter

  //do we have a parameter, if not give the user a error message via pm
  if(typeof parameter[0] == 'undefined'){ 
      message.reply('Missing role parameter')
      return;
  }
  
  let parameterRoleByUser = parameter[0];
  
  let myRoles = [
      {roleId: '441349811946651649', roleName: '🚚 Truckers'}
  ];
  
  let foundRole = myRoles.find(function(role){
      return role.roleName === parameterRoleByUser
  });
  
  //does the role exist?
  if(typeof foundRole == 'undefined'){
      message.reply('Unknown role, did you misspell it?')
  }
  
  message.author.member.addRole(foundRole.roleId);
  //Here is the part i dont know by hart, you have to get
  //the "GuildMember" object of the message, and then you can give it the new Role 


}});
/* =Connexion Système= */
client.login(config.token);


