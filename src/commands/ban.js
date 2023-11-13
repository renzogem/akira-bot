const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'ban',
        description: 'ban someone',
    },

    run: ({ interaction }) => {
        interaction.reply('fuck you!');
    },

    options: {
        devOnly: true,
        deleted: false,
    },
};