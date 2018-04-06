const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Youtube: *yh");
    console.log("Connected");
});

bot.login("NDMxODQ4NDMxNzYyNDA3NDU1.Dak5XQ.aDY1WETYTK5-ULB_1gLrqzCyhdA");


bot.on('message', message => {
    if (message.content === prefix + "yh"){
        message.channel.sendMessage("Liste des commandes: \n -En developpement");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
