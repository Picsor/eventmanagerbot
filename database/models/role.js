const { DataTypes, Model } = require('sequelize');


module.exports = class role extends Model {

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
            },
            desc:{
                type: DataTypes.TEXT
            },
            emojiCode:{
                type: DataTypes.STRING
            }
        }, {
            tableName: 'role',
            sequelize
        })


    }
}