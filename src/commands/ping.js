module.exports = {
    data: {
        name: 'ping',
        description: 'pong',
    },

    run: ({ interaction }) => {
        interaction.reply('pong');
    },

    options: {
        devOnly: false,
        deleted: false,
    },
};