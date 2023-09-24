const { DataTypes, Model } = require('sequelize');

module.exports = class CompositionRole extends Model {
    static init(sequelize) {
        return super.init({
            compositionId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            roleId: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: 'compositionRole',
            sequelize
        });
    }
}
