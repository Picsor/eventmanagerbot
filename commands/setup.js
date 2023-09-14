const { SlashCommandBuilder, ChannelSelectMenuBuilder, ChannelType, ActionRowBuilder, ComponentType, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription("Setup the bot configuration for the current server."),
	async execute(interaction) {
		let { user } = interaction;

        const select = new ChannelSelectMenuBuilder()
			.setCustomId("setConfig")
			.setPlaceholder("The event creation category")
			.setChannelTypes(ChannelType.GuildCategory)
			.setMinValues(1)

		const row = new ActionRowBuilder()
			.addComponents(select);

		const catResponse = await interaction.reply({ content: "Select the event creation category.", components: [row], ephemeral: true })
		
		const collector = catResponse.createMessageComponentCollector({ componentType: ComponentType.ChannelSelect, time: 60000 });
		
		let end= false;
		let config = {
			guildId: interaction.guildId,
			createdEventsCategoryId: "",
			availableEventsCategoryId: "",
			planningChannelId: ""
		}

		collector.on('collect', async i => {
			if(end == true) {
				config.availableEventsCategoryId = i.values[0];
				let newChannel = await i.guild.channels.create({
					name: "🫧︱planning",
					type: ChannelType.GuildText,
					parent: config.availableEventsCategoryId,
					permissionOverwrites: [
						{
							id: i.guild.roles.everyone.id,
							deny: [PermissionsBitField.Flags.SendMessages]
						}
					]
				});
				config.planningChannelId = newChannel.id;

				await i.reply('Setup complete! The following channels will be used.\n\nEvent creation category: <#'+config.createdEventsCategoryId+'>\nEvent planning channel: <#'+config.planningChannelId+'>\nEvent available category: <#'+config.availableEventsCategoryId+'>');
				collector.stop();
				
				return;
			}

			if(i.customId != "setConfig") return;
			config.createdEventsCategoryId = i.values[0];

			await i.reply({ content: "Select the event planning channel.", components: [row], ephemeral: true });
			end = true;
		});
	},
};
