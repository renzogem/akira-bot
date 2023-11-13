require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { CommandKit } = require('commandkit');
const path = require('path');

//intents: gives acces to gateway events.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans, //using this intent may not be supported in the future.
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Message, Partials.Channel, Partials.Reaction
    ],
});

new CommandKit({
    client, //client
    commandsPath: path.join(__dirname, 'commands'), //path to commands
    eventsPath: path.join(__dirname, 'events'), //path to events
    validationsPath: path.join(__dirname, 'validations'), //path to validations
    devGuildIds: ['852010387795607562'],
    devRoleIds: [
        '852199048970108959', //loser
        '852213887956680795', //nsfw
        '884877160668602409', //manga enthusiast
        '852201577548742687' //anime
    ],
    skipBuiltInValidations: false,
});

client.login(process.env.TOKEN);