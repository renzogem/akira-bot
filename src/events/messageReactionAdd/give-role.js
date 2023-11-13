module.exports = async ( message, reaction, client ) => { 
    try {
        //fetch partial message if it's uncached
        if (message.message.partial) {
            await message.message.fetch();
        }
        if (reaction.partial) {
            await reaction.fetch();
        }
        const channelId = message.message.channelId;
        const guild = client.guilds.cache.get(message.message.guildId);

        if (!guild) {
            console.error(`Guild ${message.message.guildId} not found`);
            return;
        }

        const member = message.message.guild.members.cache.get(reaction.id)
        const role = member.roles.cache;

        if (channelId === '852196626138267698') {
            if (!(role.some(role => role.name === 'based'))) {
                await member.roles.add('852586777188237413');
                console.log('added');
                await message.message.reactions.removeAll();
            }
        }
        await message.message.reactions.removeAll();
    } catch (error) {
    console.error('Error: ', error);
    return;
    }
};

    /*const channelId = message.message.channelId;
    const member = message.message.guild.members.cache.get(reaction.id)
    const role = member.roles.cache;
    //console.log(role);
    console.log(reaction.partial);
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the message: ', error);
            return;
        }
    }
    if (channelId === '852196626138267698') {
        if (!(role.some(role => role.name === 'based'))) {
            await member.roles.add('852586777188237413');
        }

    }
}; */


//One the user reacted to a specific message, they claim the role "based"
//After getting the role, the reaction is removed.
//missing permissions...?