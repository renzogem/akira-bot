const { PermissionsBitField, ChannelType } = require('discord.js');

module.exports = ( oldState, newState, client ) => {
    const oldChannelID = oldState.channelId;
    const channel = newState.guild.channels.cache.get(oldChannelID);
    if (channel && channel.type === ChannelType.GuildVoice &&
        channel.members.size === 0 &&
        channel.parentId === '852010389276983307' &&
        oldChannelID !== '1173487985874960435'
        ) {
        // The channel is a voice channel and is empty
        // Perform actions like deleting the channel
        channel.delete()
            .then(deletedChannel => {
                console.log(`Deleted ${deletedChannel.name} in ${deletedChannel.guild.name}.`);
            })
            .catch(console.error);
    }

    if (newState.channelId === '1173487985874960435') {

        const member = newState.guild.members.cache.get(newState.id)
        const channelName = member.user.globalName + "'s VC";
        let role = member.roles.cache.get('852586777188237413')

        newState.guild.channels.create({
            name: channelName,
            type: ChannelType.GuildVoice,
            bitrate: 64000,
            parent: '852010389276983307',
            permissionOverwrites: [
                {
                    id: role,
                    allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ReadMessageHistory],
                },
                {
                    id: newState.guild.roles.everyone,
                    deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ReadMessageHistory],
                },
            ],
        })
            .then(channel => {console.log(`Created ${channel.name} in ${channel.guild.name}.`);
            member.voice.setChannel(channel);
        })
            .catch(console.error);

    }
};
