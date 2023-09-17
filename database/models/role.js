const { DataTypes, Model } = require('sequelize');


module.exports = class role extends Model {

    static init(sequelize)
    {
        return super.init({
            roleId:{
                type: DataTypes.STRING,
                primaryKey: true
            },
            guildId:{
                type: DataTypes.STRING,
            },
            name:{
                type: DataTypes.STRING
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