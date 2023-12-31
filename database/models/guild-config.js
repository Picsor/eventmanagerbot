const { DataTypes, Model } = require('sequelize');

module.exports = class guildConfig extends Model {
    static init(sequelize)
    {
        return super.init({
            guildId:{
                type: DataTypes.STRING,
                primaryKey: true
            },
            availableEventsCategoryId:{
                type: DataTypes.STRING,
            },
            createdEventsCategoryId:{
                type: DataTypes.STRING
            },
            planningChannelId:{
                type: DataTypes.STRING
            },
            language:{
                type: DataTypes.STRING,
                defaultValue: "en"
            }
        }, {
            tableName: 'guildConfig',
            sequelize
        })
    }
}