module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		await client.DatabaseConnect();
		
		console.log(`Server launched successfuly! Logged in as ${client.user.tag}.`);
	},
};