
const { InteractionType } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
        let client = interaction.client;


		if (!interaction.isCommand() && !interaction.isButton() && interaction.type != InteractionType.ModalSubmit) return;
        
        await client.LoadConfig(interaction.guildId);
        
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            
            // Check if interaction member is Picsor or not
            // if (interaction.member.id != "108325248365010944") return interaction.reply({content: "Access denied. Code: 401", ephemeral: true});

            if (!command) return;
        
            if (command.permission) {
                const authorPerms = interaction.channel.permissionFor(interaction.member);
                if(!authorPerms || !authorPerms.has(command.permission)) {
                    return interaction.editReply({content: 'Missing permissions.'});
                }
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }

        
        if (interaction.type == InteractionType.ModalSubmit) {

            const modal = client.components.get(interaction.customId);

            if (!modal)
                return console.log("Modal not found: " + interaction.customId);
            
            try {
                await modal.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this interaction! '+error, ephemeral: true });
            }

        }


        if (interaction.isButton()) {
            const button = client.components.get(interaction.customId);
            
            if (!button) return console.log("Button not found: " + interaction.customId);

            try {
                await button.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this interaction! '+error, ephemeral: true });
            }
        }
	},
};