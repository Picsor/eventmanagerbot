const { SlashCommandBuilder, ChannelSelectMenuBuilder, ChannelType, ActionRowBuilder, ComponentType, PermissionsBitField, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('post-infos')
		.setDescription("Post info/config messages.")
        .addStringOption(option => option.setName("type").setDescription("The type of the message.").setRequired(true)
            .addChoices(
                {name: "HTCM subscription",value: "htcm-sub" },
                {name: "New guild infos",value: "new-guild-info" },
                {name: "HTCM phases",value: "htcm-phases" }
            )),
	async execute(interaction) {
		const client = interaction.client;

        const type = interaction.options.getString("type");

        switch(type) {
            case "new-guild-info":
                const nginfoEmbed = new EmbedBuilder()
                    .setColor(client.GetColor("soft-purple"))
                    .setDescription("Bonjour à **toutes** et **tous**,\n\
                    Suite aux évènements passés, à la création du présent Discord et à l'organisation de la Guilde actuellement en cours, nous ne voudrions pas qu'il y ait de quiproquo.\n\
                    \n\
                    Nous avons créé les ***Quixotic Gamblers*** afin d'avoir une **Guilde majoritairement Communautaire**.\n\
                    Une communauté où les GMs __ne sont pas seuls décideurs__ mais que la parole revienne à tous les **Membres actifs**.\n\
                    En cas de conflits ou d'égalité dans les choix qui s'offriront à nous, les officiers et GMs seront là pour trancher.\n\
                    Sachez que les Officiers et GMs sont des représentants de la Guilde au même titre que tous les Membres de cette dernière.\n\
                    C'est donc tous ensemble que nous devrons choisir et faire le nécessaire pour avancer petit à petit dans l'aventure qui s'offre à nous.\n\
                    \n\
                    Il est essentiel de rappeler que **les choix que nous faisons n'incombent qu'à nous-mêmes**.\n\
                    > Chacun d'entre nous est libre de prendre les décisions qu'il estime être les meilleures pour lui.\n\
                    > Cependant, avec cette liberté vient la responsabilité.\n\
                    > Chacun doit assumer les conséquences de ses choix et ce n'est pas à nous, en tant que fondateurs, de porter les responsabilités de tous.\n\
                    \n\
                    Nous tenons à vous rappeler que **vous êtes libres de nous rejoindre** ***(ou non)***, tout comme de rester parmi nous, ou d'être invité sur ce Discord.\n\
                    > Différents rôles vont être mis en place sur le Discord afin de pouvoir différencier les **Invités** des **Membres officiels** de la Guilde\n\
                    > Nous vous amènerons le détail lorsque ce sera en place.\n\
                    \n\
                    ")

                const ngInfoButton = new ActionRowBuilder()
                                .addComponents(new ButtonBuilder()
                                    .setStyle(ButtonStyle.Primary)
                                    .setLabel("J'accepte et rentre au qG")
                                    .setCustomId("ngInfoButtonAccept")
                                )
                                .addComponents(
                                    new ButtonBuilder()
                                    .setStyle(ButtonStyle.Secondary)
                                    .setLabel("J'ai besoin de réfléchir")
                                    .setCustomId("ngInfoButtonDecline")
                                )

                return interaction.channel.send({embeds: [nginfoEmbed], components: [ngInfoButton]});

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
