const { AttachmentBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'commandments',
        description: 'responds with the rules of the server',
    },

    run: async ({ interaction }) => {
        const image = new AttachmentBuilder('assets/devilRIP.gif');
        const channel = await interaction.guild.channels.fetch('852196626138267698');
        channel.send({ files: [image] });
        channel.send(`
Welcome to **C R Y**!

**C R Y** is meant to be a server aimed at bringing people together. So any sort of disruption will be dealt with accordingly. 
You're time here in the server is expected to be laid-back... With that being said, respect the rules of the server and enjoy your time here.
        
**HARRASMENT**: Harrasment of any kind will not be tolerated. Hate speech, racism, sexism, etc. is not welcome in this community.

**CONTENT**: Content should be posted in their respective channels. Any sort of illegal content is not tolerated.

**SPAM**: Just... don't spam. Keep the chat clean and organized.

**DECENCY**: Have some decency, be respectful, dont be weird, and don't be the problem.

**DRAMA**: Don't cause drama, keep it private between each other or DM any of the mods.

**REPORTING**: Report any sort of issues within the servers to the mods.

**DISCORD GUIDELINES**: https://discord.com/guidelines

I honestly don't know what else to say, because there shouldn't be anything else to say.
**Don't cross that line**, use common sense and deal with issues in a reasonable manner.
There are people are here to help you, so don't be afraid to ask for help. 
But also reach out for each other. Like I said earlier, this server is meant to bring people together. 
Enjoy your time with the people here.

After reading this, react to this message and you will be granted access to **C R Y**.
        `);
        interaction.reply('done');
    },

    options: {
        devOnly: true, 
        deleted: false
    },     
};

//cmd + x deleted a line btw