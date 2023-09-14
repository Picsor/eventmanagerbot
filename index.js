const fs = require('fs');

const Client = require('./includes/client.js');
const { Collection } = require('discord.js');
const { token } = require('./config.json');
const tools = require('./includes/tools.js');

const client = new Client();

client.commands = new Collection();
client.components = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const componentsFiles = fs.readdirSync('./components').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

for (const file of componentsFiles) {
	const component = require(`./components/${file}`);
	client.components.set(component.name, component);
}

client.login(token);