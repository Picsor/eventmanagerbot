const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create-role')
		.setDescription("Create a role."),
	async execute(interaction) {
        const client = interaction.client;
        const clientConfig = await client.GetConfig(interaction.guildId);
        if(!clientConfig) return interaction.reply({content: client.GetText("setupNotDone"), ephemeral: true});


    }
}


