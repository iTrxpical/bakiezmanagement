exports.run = (Discord, client, message, args) => { //This is what ever commandFile.run(Discord, client, message, args); had in the brackets. This means we don't have to keep defining the same thing.

var randomColor = Math.floor(Math.random() * 16777215).toString(16); //Just gets a random color. Feel free to not put this, I just like it lol.

var embedping = new Discord.RichEmbed() // Makes the embed so we can send it.

        .setColor(randomColor) //If you don't do random color, put a hex code in inverted commas with a # infront.
        .addField(":ping_pong: Pongy!", new Date().getTime() - message.createdTimestamp + " ms") //Makes the field.

message.channel.sendEmbed(embedping); //Sends the embed.
}