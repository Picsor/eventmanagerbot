# README #

This readme aims to be a simple introduction to the project and its installation.

### What is this repository for? ###

* Development / Bot Updating
* Version 17.4.6.5[ <sprint>.<epic>.<us>.<build> ] - Rebuilt the bot to make it more stable and secure (=> swap3).
* [Repo / Issues](https://github.com/Picsor/sypherbot/issues)
* [Doc Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)

### Set yourself up! ###

* Create your bot with [Discord Dev Portal](https://discord.com/developers/applications): Use "<your_name> Sypher Dev" as your application name,
* Invite it to your private discord server and also to all other dev-emoji servers.
* Create the channels requested in the './client/idbank.js' "SETUP CHANNELS" part.
* Edit './client/idbank.js' part called "SETUP CHANNELS - MUST BE CHANGED ON SETUP" with the correct id's.
* Add your server to whitelist.
* Move on to the next steps.

### Get the code running ###

* Download & Install [MySQL](https://dev.mysql.com/downloads/installer/),
* Create a user access.
* 'cd' through the folders until you get to C:\Program Files\MySQL\MySQL Server v8.0\bin and there run `.\mysql`. Server will start.
* Connect with your credentials: '.\mysql -u <your_name> -p' & enter your password.
* Create your database: 'CREATE DATABASE sypherBOT22;' 
* Use it: 'use sypherBOT22' 
* Create a config.json file in the root folder of the project. Rename the "config.example.json" file to "config.json" and fill in the correct values.

### Contribution guidelines ###

* Contribute to the project on GitHub.
* Writing tests.
* Code review.

### Files Codes & Prefix ###

* You can access the global functions through `interaction.client.{function_name}()`.
* or_ => 'OnReaction', called when a reaction is added to a message.
* db_ => 'Database', Database models files.
