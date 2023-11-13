module.exports = ({ interaction, commandObj }) => {
    if (commandObj.options.devOnly) { //checks if the commands options devOnly is true
        if (!interaction.member.roles.cache.some(role => role.id === '852199048970108959')) { //checks if the user has the proper role
            if (commandObj.data.name === 'sauce') {
                return false;
            }
            interaction.reply(`**You don't have the proper role.**`); //if the user does not have the proper role, it will reply with an error message
            return true;
        }
        return false;
    } 
    return false;
};

//okay something is wrong with this function
//the issue is in the return statement, if we return false the code will run as usual meaning the command will be executed
//if we return true, the code will not run therefore the command will not be executed
//the idea is to check if the user has the proper roles
//if not, it will reply with an error message and the command will not be executed the code should return true
//if the user has the proper roles, the command will be executed meaning the code should return false
//the goal is to check if the user has the proper roles to execute the command
//so we need to return false
