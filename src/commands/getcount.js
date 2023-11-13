module.exports = {
    data: {
        name: 'count',
        description: 'updates the member count of the server.',
    },

    run: ({ interaction }) => {
        const channel = interaction.guild.channels.cache.get('1173459155479183370');
        channel.setName(`B A S E D: ${interaction.guild.memberCount - 3}`);
        interaction.reply({ content: 'done', ephemeral: true });
    },

    options: {
        devOnly: true,
        deleted: true,
    },
};