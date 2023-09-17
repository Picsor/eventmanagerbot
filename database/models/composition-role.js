const { DataTypes, Model } = require('sequelize');

module.exports = class CompositionRole extends Model {
    static init(sequelize) {
        return super.init({
        }, {
            tableName: 'compositionRole',
            sequelize
        });
    }
}
