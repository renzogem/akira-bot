const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'ban',
        description: 'ban someone',
    },

    run: ({ interaction }) => {
        interaction.reply('banned!');
    },

    options: {
        devOnly: true,
        deleted: false,
    },
};