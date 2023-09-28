const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, messageLink, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'htcm-sub',
	async execute(interaction) {
        client = interaction.client;
        member = interaction.member;
        

        const embedSuccess = new EmbedBuilder()
            .setDescription(client.GetText("msgAddHTCMRoleSuccess"))
            .setColor(client.GetColor("light-green"));

        const embedError = new EmbedBuilder()
            .setDescription(client.GetText("msgAddHTCMRoleError"))
            .setColor(client.GetColor("red"));

            

            

        if (member.roles.cache.some(role => role.name === 'HT CM')) 
            return interaction.reply({embeds: [embedError], ephemeral: true});

        const role = await interaction.guild.roles.cache.find(r => r.name == "HT CM")
        member.roles.add(role);

        

        interaction.reply({embeds: [embedSuccess], ephemeral: true});
    },
};