const { DataTypes, Model } = require('sequelize');

module.exports = class event extends Model {
    static init(sequelize)
    {
        return super.init({
            id:{
                type: DataTypes.STRING,
                primaryKey: true
            },
            authorId:{
                type: DataTypes.STRING,
            },
            size:{
                type: DataTypes.INTEGER
            },
            title:{
                type: DataTypes.STRING
            },
            description:{
                type: DataTypes.TEXT
            },
            date:{
                type: DataTypes.DATE
            },
            
            duration:{
                type: DataTypes.INTEGER
            },
            channelId:{
                type: DataTypes.STRING
            },
            messageId:{
                type: DataTypes.STRING
            },
            lmessageId:{
                type: DataTypes.STRING
            }
        }, {
            tableName: 'event',
            sequelize
        })
    }
}