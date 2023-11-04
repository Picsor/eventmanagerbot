const { EmbedBuilder, messageLink, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
name: 'ngInfoButtonDecline',
	async execute(interaction) {
        client = interaction.client;
        member = interaction.member;


        const embedSuccess = new EmbedBuilder()
            .setDescription(client.GetText("msgGlobalSuccess"))
            .setColor(client.GetColor("light-green"));

        const embedError = new EmbedBuilder()
            .setDescription(client.GetText("msgRoleAlreadyAssignedError"))
            .setColor(client.GetColor("red"));

        if (member.roles.cache.some(role => role.name === 'Quixotic Gambler')) 
            return interaction.reply({embeds: [embedError], ephemeral: true});
        
        const role = await interaction.guild.roles.cache.find(r => r.name == "Quixotic Gambler")
        try {
            member.roles.add(role);
        } catch {
            return interaction.reply({embeds: [embedError], ephemeral: true});
        }
        

        interaction.reply({embeds: [embedSuccess], ephemeral: true});
    },
};