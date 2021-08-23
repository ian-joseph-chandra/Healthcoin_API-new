'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RecordUpdate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Record, {foreignKey: 'old_record_id', as: 'old_record'});
            this.belongsTo(models.Record, {foreignKey: 'new_record_id', as: 'new_record'});
        }
    }
    RecordUpdate.init({
        oldRecordId: {
            type: DataTypes.BIGINT.UNSIGNED,
            field: 'old_record_id',
            allowNull: false,
            primaryKey: true
        },
        newRecordId: {
            type: DataTypes.BIGINT.UNSIGNED,
            field: 'new_record_id',
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'RecordUpdate',
        tableName: 'record_update_logs',
        timestamps: false
    });
    return RecordUpdate;
};
