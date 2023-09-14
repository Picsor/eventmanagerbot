const fs = require('fs');
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const cDatabase = require('../database/database.js');
const cIdbank = require('./idbank.js');
const cTextBank = require('./textBank.js');
const cColorBank = require('./colorBank.js');
const cSettings = require('./settings.js');
const cTools = require('./tools.js');

module.exports = class extends Client {
	constructor(config) {
		super({
			intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
			partials: [Partials.Channel, Partials.User, Partials.Message, Partials.GuildMember, Partials.ThreadMember]
		});

        this.m_SettingsFilename = "./Settings.txt";

		this.m_Settings = this.LoadSettings();
		
		this.queue = new Map();
		this.m_Db = new cDatabase();
		this.m_Tools = new cTools(this);
		this.m_idBank = new cIdbank();
		this.m_TextBank = new cTextBank(this.m_Settings.m_Language, this.m_Settings.m_Prefix);
		this.m_ColorBank = new cColorBank();
    
		this.m_Admins =  [this.GetId("Picsor")];
	}

	async DatabaseConnect() {
		await this.m_Db.Authenticate();
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	GetText(text_id) {
		return this.m_TextBank.GetText(text_id);
	}

	GetId(text_id) {
		return this.m_idBank.GetId(text_id);
	}

	GetColor(color_id) {
		return this.m_ColorBank.GetColor(color_id);
	}

	IsAdmin(user_id)
	{
		return this.m_Admins.includes(user_id);
	}

	MakeId(length, type) 
	{
		let result           = `${this.m_Settings.m_BotVersion}`.replace(/\./g, '');
		let characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
		if( type == "int" )
			characters = '0123456789';

		let charactersLength = characters.length;

		for (let i = 0; i < length; i++ ) 
		   result += characters.charAt(Math.floor(Math.random() * charactersLength));
		
		return result;
	}

	SetLanguage(lang)
	{
		this.m_TextBank.SetLanguage(lang)
        this.m_Settings.m_Language = lang;
		this.SaveSettings();
	}

	SetPrefix(prefix)
	{
		this.m_TextBank.SetPrefix(prefix)
        this.m_Settings.m_Prefix = prefix;
		this.SaveSettings();
	}


	SetVersion(version)
	{
		this.m_Settings.m_BotVersion = version;
		this.SaveSettings();
	}

	SaveSettings() {
        let StringJSON = JSON.stringify(this.m_Settings);

        fs.writeFileSync(this.m_SettingsFilename, StringJSON, function(err) {
            if(err){
                console.log(err);
            }
        });
    }

    LoadSettings() {
		
        if (!fs.existsSync(this.m_SettingsFilename))
            return new cSettings();

        let data = fs.readFileSync(this.m_SettingsFilename, function(err) {
            if(err){
                console.log(err);
            }  
        })
        
        let settings = JSON.parse(data);
        if (settings == null)
			return new cSettings();

		return settings;
    }

	shorten(text, maxLength) {
		if (text.length > maxLength) {
			return text.substr(0, maxLength - 3) + "...";
		}
		return text;
	}

	AddTime(duration, date) {

		let duration_format = "HHhmmm";

		let DurationCheck = moment(duration, duration_format).isValid();
		if(DurationCheck == false)
			return ("ERR, DurationCheck invalid.");

		let Hours = moment(duration, duration_format).hours();
		let Min = moment(duration, duration_format).minutes();

		let dt = moment(date, "DD/MM/YYYY HH:mm");

		dt.add(Hours, "h");
		dt.add(Min, "m");
		return dt;
	}

};