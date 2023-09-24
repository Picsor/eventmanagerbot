const { Sequelize } = require('sequelize');


const { db_name, db_user, db_pass, db_host } = require('../config.json');
const guildConfig = require('./models/guild-config');
const event = require('./models/event');
const role = require('./models/role');
const composition = require('./models/composition');
const compositionRole = require('./models/composition-role');

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
            .then(async () => {
                console.log('Connected to DB')

                await this.Connection(event);
                await this.Connection(guildConfig);
                await this.Connection(role);
                await this.Connection(composition);
                await this.Connection(compositionRole);

                // role.belongsToMany(composition, { through: compositionRole })
                // composition.belongsToMany(role, { through: compositionRole })
                // //role.belongsToMany(composition, { foreignKey: 'roleId', through: compositionRole, as: 'roles' })


                console.log('Bot: Online');
            }).catch((err) => console.log(err));
    }

    async Connection(database) {
        database.init(this.m_Db)
        await database.sync();
    }
}
