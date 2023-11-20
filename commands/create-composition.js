const { SlashCommandBuilder, ChannelSelectMenuBuilder, ChannelType, ActionRowBuilder, ComponentType, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create-composition')
		.setDescription("Create a composition.")
        .addStringOption(option => option.setName("name").setDescription("The name of the composition.").setRequired(true)),
	async execute(interaction) {
        const client = interaction.client;
        const clientConfig = await client.GetConfig(interaction.guildId);
        const RoleService = client.RoleService;

        if(!clientConfig) return interaction.reply({content: client.GetText("setupNotDone"), ephemeral: true});

        let compositionName = interaction.options.getString("name");

        let guildRoleList = await RoleService.getRolesByGuildId(interaction.guildId);

        if(guildRoleList.length == 0) return interaction.reply({content: client.GetText("msgNoRoles"), ephemeral: true});

        let msgEmbed = new EmbedBuilder()
            .setTitle(client.GetText("msgCreateCompositionTitle"))
            .setDescription(client.GetText("msgCreateCompositionDesc"))
            .setColor(client.GetColor("purple"));

        const select = new StringSelectMenuBuilder()
            .setCustomId("PickRoles")
            .setPlaceholder(client.GetText("msgCreateCompositionPlaceholder"))
            .setMinValues(1);

        guildRoleList.forEach(role => {
            select.addOptions([
                new StringSelectMenuOptionBuilder()
                    .setEmoji(role.emojiCode)
                    .setLabel(role.name)
                    .setValue(role.id)
            ]);
        });

        let composition = {
            id: client.MakeId(10),
            name: compositionName,
            guildId: interaction.guildId.toString(),
            roles: []
        }

        const row = new ActionRowBuilder().addComponents(select);


        const catResponse = await interaction.reply({ embeds: [msgEmbed], components: [row], ephemeral: true })

        const collector = catResponse.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 30000 });
        const quantityCollector = catResponse.createMessageComponentCollector({ componentType: ComponentType.Button, time: 30000 });

        collector.on('collect', async i => {
            if(i.customId == "PickRoles") {
                i.values.forEach(async role => {
                    let roleToAdd = guildRoleList.find(r => r.id == role);
                    composition.roles.push(roleToAdd);
                });

                let displayRoleQuantityEmbed = new EmbedBuilder()
                    .setTitle(client.GetText("msgCreateCompositionTitle"))
                    .setDescription(client.GetText("msgCreateCompositionDesc"))
                    .setColor(client.GetColor("purple"));   
                    
                let buttonRow = new ActionRowBuilder()
                let secondButtonRow = new ActionRowBuilder()

                for(let i = 1; i <= 10; i++) {
                    let row = buttonRow;

                    if( i > 5) row = secondButtonRow;

                    row.addComponents(
                        new ButtonBuilder()
                            .setCustomId("quantity"+i)
                            .setLabel(i.toString())
                            .setStyle(ButtonStyle.Primary)
                    )
                }

                client.CompositionService.addComposition(composition, client.MakeId);
                await i.reply({embeds: [displayRoleQuantityEmbed], components: [buttonRow, secondButtonRow], ephemeral: true});
                collector.stop();
            }
        });


        let totalRoleCount = 0;

        quantityCollector.on('collect', async i => {
            //check if startwith quantity
            if(i.customId.startsWith("quantity")) {
                let int = parseInt(i.label);
                totalRoleCount += int;
            }

            i.reply({content: "Total role count: "+totalRoleCount+"/10", ephemeral: true});
            
        });


    }
}


