const { Sequelize } = require('sequelize');

const event = require('./models/event');

const { db_name, db_user, db_pass, db_host } = require('../config.json');
const guildConfig = require('./models/guild-config');

//
module.exports = class cDatabase {
    constructor() {
        this.m_Db = new Sequelize(db_name, db_user, db_pass, {
            dialect: 'mysql',
            host: db_host
        });
    }

    async Authenticate() {

        await this.m_Db.authenticate()
            .then(() => {
                console.log('Connected to DB')

                this.Connection(event);
                this.Connection(guildConfig);

                console.log('Bot: Online');
            }).catch((err) => console.log(err));
    }

    Connection(database) {
        database.init(this.m_Db)
        database.sync();
    }
}
