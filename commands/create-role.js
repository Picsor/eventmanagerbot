const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('create-role')
		.setDescription("Create a role.")
        .addStringOption(option => option.setName("name").setDescription("The name of the role.").setRequired(true))
        .addStringOption(option => option.setName("emoji").setDescription("The emoji of the role. (Must be from this server)").setRequired(true))
        .addStringOption(option => option.setName("desc").setDescription("The description of the role.").setRequired(false)),
	async execute(interaction) {
        const client = interaction.client;
        const clientConfig = await client.GetConfig(interaction.guildId);
        if(!clientConfig) return interaction.reply({content: client.GetText("setupNotDone"), ephemeral: true});
        
        const embedsHolder = {
            "msgCreateRoleInvalidNameLength": new EmbedBuilder()
                                .setDescription(client.GetText("msgCreateRoleInvalidNameLength"))
                                .setColor(client.GetColor("red")),
            "msgCreateRoleInvalidEmoji": new EmbedBuilder()
                                .setDescription(client.GetText("msgCreateRoleInvalidEmoji"))
                                .setColor(client.GetColor("red")),
            "msgCreateRoleSuccess": new EmbedBuilder()
                                .setDescription(client.GetText("msgCreateRoleSuccess"))
                                .setColor(client.GetColor("light-green")),
            "msgCreateRoleError": new EmbedBuilder()
                                .setDescription(client.GetText("msgCreateRoleError"))
                                .setColor(client.GetColor("red"))
        };


        let name = interaction.options.getString("name");
        let emoji = interaction.options.getString("emoji");
        let desc = interaction.options.getString("desc") || "";
        
        if(name.length > 13) return interaction.reply({embeds: [embedsHolder["msgCreateRoleInvalidNameLength"]], ephemeral: true});

        if(desc.length > 100) return interaction.reply({embeds: [embedsHolder["msgCreateRoleInvalidDescLength"]], ephemeral: true});
        
        //remove spaces from emoji
        emoji = emoji.replace(/ /g, '');

        const isEmoji = emoji.match(/^(?:<a?:\w{2,32}:)\d+>$|^\p{Emoji}$/u) !== null;
        const isFromServer = interaction.guild.emojis.cache.some((e) => e.toString() === emoji);

        if(!isEmoji || !isFromServer) return interaction.reply({embeds: [embedsHolder["msgCreateRoleInvalidEmoji"]], ephemeral: true});

        let roleExists = await client.RoleService.getRoleByName(name);
        if (roleExists) return interaction.reply({embeds: [embedsHolder["msgCreateRoleError"]], ephemeral: true});

        await client.RoleService.addRole({id: client.MakeId(10), name: name, emojiCode: emoji, desc: desc, guildId: interaction.guildId.toString()});

        embedsHolder["msgCreateRoleSuccess"].setTitle(`${emoji} **${name}**`);
        return interaction.reply({embeds: [embedsHolder["msgCreateRoleSuccess"]]}, {ephemeral: true});

    }
}


