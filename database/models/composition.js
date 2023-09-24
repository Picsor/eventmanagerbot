const { DataTypes, Model } = require('sequelize');

module.exports = class composition extends Model {
    static init(sequelize)
    {
        return super.init({
            id:{
                type: DataTypes.STRING,
                primaryKey: true
            },
            guildId:{
                type: DataTypes.STRING,
            },
            name:{
                type: DataTypes.STRING
            }
        }, {
            tableName: 'composition',
            sequelize
        })
    }
}