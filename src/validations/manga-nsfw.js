//checks if the commands options devOnly is true
//then checks if role is the proper role both nsfw and manga enthusiast

module.exports = ({ interaction, commandObj }) => {
    if (commandObj.options.devOnly) { //checks if the commands options devOnly is true
        if (!(interaction.member.roles.cache.some(role => role.id === '884877160668602409') && interaction.member.roles.cache.some(role => role.id === '852213887956680795'))) { //checks if the user has the proper role
            interaction.reply(`**Not yet little one...**`); //if the user does not have the proper role, it will reply with an error message
            return true;
        }
        return false;
    } 
    return false;
};