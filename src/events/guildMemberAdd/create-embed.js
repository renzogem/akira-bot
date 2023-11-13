/* 
The goal of this function is to create an embed that welcomes the user to the server.
The embed will include:
- A welcome message
- GIF on the embed
- Tags the new user could access.
*/
const { EmbedBuilder, AttachmentBuilder } = require('discord.js');


module.exports = async (member) => {
    const channel = await member.guild.channels.fetch('852198024402174015');
    const userId = member.user.id;

    const image = new AttachmentBuilder('assets/devilMAN.gif');
    const embed = new EmbedBuilder()
    .setColor(0x8B0000)
    .setDescription(`<@${userId}> has been granted access to **C R Y**.
    \nCheck <#852196626138267698> to gain access.`)
    .setThumbnail(member.user.displayAvatarURL())
    .setImage('attachment://devilMAN.gif')

    channel.send({ embeds: [embed], files: [image] });
};
