const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

   
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();  

     if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} and is being passed onto the handler...!`);

        }

    //IN COMMANDS FOLDER
    
    //MAKE A FILE NAMED THIS EXACTLY: 'ping.js' IT MUST BE CASE SENSITIVE AND HAVE .JS AT THE END. NO ''s.
    
    //ANY COMMAND MUST HAVE THIS WITH THE CODE IN THE MIDDLE.
    
    //exports.run = (Discord, client, message, args) => { //This is what ever commandFile.run(Discord, client, message, args); had in the brackets. This means we don't have to keep defining the same thing.
    
    
    
    // THIS MUST BE THIS WAY
    client.login(process.env.BOT_TOKEN);