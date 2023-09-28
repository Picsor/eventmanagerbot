const { SlashCommandBuilder, ChannelSelectMenuBuilder, ChannelType, ActionRowBuilder, ComponentType, PermissionsBitField, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('post-infos')
		.setDescription("Post info/config messages.")
        .addStringOption(option => option.setName("type").setDescription("The type of the message.").setRequired(true)
            .addChoices(
                {name: "HTCM subscription",value: "htcm-sub" },
                {name: "HTCM phases",value: "htcm-phases" }
            )),
	async execute(interaction) {
		const client = interaction.client;

        const type = interaction.options.getString("type");

        switch(type) {
            case "htcm-sub": 
                const htcmEmbed = new EmbedBuilder()
                    .setTitle(client.GetText("msgTitleAddHTCMRole"))
                    .setDescription(client.GetText("postInfoMessageAddHTCMRole"))
                    .setColor(client.GetColor("blurple"));
                const htcmButton = new ActionRowBuilder()
                    .addComponents(new ButtonBuilder()
                        .setCustomId("htcm-sub")
                        .setLabel(client.GetText("postInfoButtonLabelAddHTCMRole"))
                        .setStyle(ButtonStyle.Primary)
                    );
                return interaction.channel.send({embeds: [htcmEmbed], components: [htcmButton]});
        
            case 'htcm-phases': 
                const htcmGuideEmbed = new EmbedBuilder()
                    .setTitle("Guide HT CM")
                    .setDescription("Voici les différentes phases du combat.")
                    .setColor(client.GetColor("blurple"));
                
                const htcmGuideButtons = new ActionRowBuilder()
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Purification 1")
                        .setURL("https://ff14.toolboxgaming.space/?id=807470508483661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Jormag")
                        .setURL("https://ff14.toolboxgaming.space/?id=907472028483661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Primordius")
                        .setURL("https://ff14.toolboxgaming.space/?id=371377648892661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Kralkatorrik")
                        .setURL("https://ff14.toolboxgaming.space/?id=661372984892661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Purification 2")
                        .setURL("https://ff14.toolboxgaming.space/?id=617477912583661&preview=1")
                    )

                const htcmGuideButtons2 = new ActionRowBuilder()
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Mordremoth (old r2/r3 switched)")
                        .setURL("https://ff14.toolboxgaming.space/?id=751373116792661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Zhaitan")
                        .setURL("https://ff14.toolboxgaming.space/?id=500378468192661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Purification 3")
                        .setURL("https://ff14.toolboxgaming.space/?id=468478734393661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Soo-Won 1 (SW1)")
                        .setURL("https://ff14.toolboxgaming.space/?id=671372398892661&preview=1")
                    )
                    .addComponents(new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel("Purification 4")
                        .setURL("https://ff14.toolboxgaming.space/?id=637470790683661&preview=1")
                    )

                const htcmGuideButtons3 = new ActionRowBuilder()
                    .addComponents(new ButtonBuilder()
                    .setStyle(ButtonStyle.Link)
                    .setLabel("Soo-Won 2 (SW2)")
                    .setURL("https://ff14.toolboxgaming.space/?id=054379020513661&preview=1")
                )

                return interaction.channel.send({embeds: [htcmGuideEmbed], components: [htcmGuideButtons, htcmGuideButtons2, htcmGuideButtons3]});

            default: 
                return interaction.reply({content: "Type invalide.", ephemeral: true});
        }
	},
};
