//APP.JS FILE

const Discord = require('discord.js'); //Basically gets the programming language (// makes it so the code doesn't read this)
const client = new Discord.Client(); //Gets us a client and links to the bot account
const prefix = '()'; // This is the prefix, you need to set this

//Right next you need to basically like turn the client on so you do:

client.on('ready',() => {

// Now you will want to log it on the console (a thing that we use to debug) so we can see if it is on or not

console.log(`Logged in!`)

//Here we will set the online type and playing mode.

client.user.setActivity('over Askreno. | =info', { type: 'WATCHING' });
client.user.setStatus("online");

});

// Procfile //

//We now need to make a message function by doing the following:

client.on('message', message => {

//I will now tell it to not read anything in DMs

    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**We can't read anything in DM's! Please go into a guild with me in and run the command `info` for information about me!!!**") // Basically if you DM the bot it will reply with that text
        return;
    }
    
//I will now copy the command handler text in and then explain it.

        if (!message.content.startsWith(prefix)) return; //Seeing if it starts with our prefix. If not it will ignore the message

        try {

            let commandFile = require(`./commands/${cmd}.js`); //Defining our command folder
            commandFile.run(Discord, client, message, args); //Telling it what to copy over to it

        } catch (e) {

            console.log(e); //Catching error

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} and is being passed onto the handler...!`); //Logging that it worked

        }


}

//IN COMMANDS FOLDER

//MAKE A FILE NAMED THIS EXACTLY: 'ping.js' IT MUST BE CASE SENSITIVE AND HAVE .JS AT THE END. NO ''s.

//ANY COMMAND MUST HAVE THIS WITH THE CODE IN THE MIDDLE.

//exports.run = (Discord, client, message, args) => { //This is what ever commandFile.run(Discord, client, message, args); had in the brackets. This means we don't have to keep defining the same thing.

)

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);