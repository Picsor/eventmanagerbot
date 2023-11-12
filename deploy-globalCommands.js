const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// const { clientId, guildId, token } = require('./config.json');

const dotenv = require('dotenv');
dotenv.config();

const clientId = process.env.CLIENT_ID;
const token = process.env.TOKEN;

const root = './commands/global';

const commands = [];
const commandFiles = fs.readdirSync(root).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`${root}/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
