const { SlashCommandBuilder, ChannelSelectMenuBuilder, ChannelType, ActionRowBuilder, ComponentType, PermissionsBitField, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder } = require('discord.js');

const guildConfig = require('../database/models/guild-config.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription("Setup the bot configuration for the current server."),
	async execute(interaction) {
		const client = interaction.client;

		const clientConfig = await client.GetConfig();

        const select = new ChannelSelectMenuBuilder()
			.setCustomId("setEventCreateCat")
			.setPlaceholder(client.GetText("setupEventCreateCategoryPlaceholder"))
			.setChannelTypes(ChannelType.GuildCategory)
			.setMinValues(1);



		const langMenu = new StringSelectMenuBuilder()
			.setCustomId("setLang")
			.setPlaceholder(client.GetText("setupLangSelectPlaceholder"))
			.setMinValues(1)
			.setMaxValues(1)
			.addOptions([
				new StringSelectMenuOptionBuilder()
					.setLabel("English")
					.setValue("en"),
				new StringSelectMenuOptionBuilder()
					.setLabel("Spanish")
					.setValue("es"),
				new StringSelectMenuOptionBuilder()
					.setLabel("French")
					.setValue("fr")
			]);

		const langRow = new ActionRowBuilder().addComponents(langMenu);
		const row = new ActionRowBuilder().addComponents(select);


		let test = clientConfig ? "[Reset] " : "";

		const catResponse = await interaction.reply({ content: test+client.GetText("setupEventCreateCategory"), components: [row], ephemeral: true })
		
		const collector = catResponse.createMessageComponentCollector({ componentType: ComponentType.ChannelSelect, time: 30000 });
		const langCollector = catResponse.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 30000 });
		
		let config = {
			guildId: interaction.guildId.toString(),
			createdEventsCategoryId: "",
			availableEventsCategoryId: "",
			planningChannelId: "",
			language: "en"
		}

		collector.on('collect', async i => {

			if(i.customId == "setEventCreateCat") {

				config.createdEventsCategoryId = i.values[0];
	
				select.setPlaceholder(client.GetText("setupEventAvailableCategoryPlaceholder"));
				select.setCustomId("setEventPublishCat")
				
				await i.reply({ content: client.GetText("setupEventAvailableCategory"), components: [row], ephemeral: true });
			} 

			if(i.customId == "setEventPublishCat") {
				config.availableEventsCategoryId = i.values[0];

				await i.reply({ content: client.GetText("setupLang"), components: [langRow], ephemeral: true });
				collector.stop();
				return;
			}
		});

		let createChannelErr = null;

		langCollector.on('collect', async i => {
			if(i.customId != "setLang") return;

			//Step 3
			config.language = i.values[0];
			client.SetLanguage(config.language);
			try {
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
			} catch {
				createChannelErr = client.GetText("setupCreateChannelError");
			}


			const configReviewEmbed = new EmbedBuilder()
									.setDescription(client.GetText("setupCompleteMsg1")+config.createdEventsCategoryId+client.GetText("setupCompleteMsg2")+config.planningChannelId+client.GetText("setupCompleteMsg3")+config.availableEventsCategoryId+client.GetText("setupCompleteMsg4")+config.language)
									.setColor(client.GetColor("blurple"));
			


			if(clientConfig) {
				const previousConfigReviewEmbed = new EmbedBuilder()
				.setDescription(client.GetText("setupPreviousConfCompleteMsg1")+clientConfig.createdEventsCategoryId+client.GetText("setupCompleteMsg2")+clientConfig.planningChannelId+client.GetText("setupCompleteMsg3")+clientConfig.availableEventsCategoryId+client.GetText("setupCompleteMsg4")+clientConfig.language)
				.setColor(client.GetColor("red"));
				
				await guildConfig.update(config, { where: { guildId: interaction.guildId.toString() } });
				await i.reply({ephemeral: true, embeds: [previousConfigReviewEmbed, configReviewEmbed] });
			} else {
				await guildConfig.create(config);
				await i.reply({ephemeral: true, embeds: [configReviewEmbed] });
			}

			langCollector.stop();
		});
			

	},
};
