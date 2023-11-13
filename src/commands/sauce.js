/*
The goal of this command is to respond with an embed that gives user a random sauce.
This command will incliude:
- Only responds to those with the proper role
- Responds with a random sauce
- @'s the user
- Create an embed with all the information about the sauce
*/

const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
		name: 'sauce',
		description: 'want the secret sauce?',
	},


    run: async ({ interaction }) => {
        const embed = new EmbedBuilder()
        .setTitle('Secret Sauce')
		.setColor(0x8B0000)
        .setDescription('This is the secret sauce.')
        .addFields(
            { name: 'Sauce', value: 'This is the secret sauce.' },
        )

        interaction.reply({ embeds: [embed] });
    },
	
	options: {
		devOnly: true,
		deleted: false,
	},
};

/*
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
*/