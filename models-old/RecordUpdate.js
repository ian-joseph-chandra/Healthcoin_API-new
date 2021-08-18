const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize,
    Record = require('./Record');

class RecordUpdate extends Model {
}

RecordUpdate.init({
    oldRecordId: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
            model: Record,
            key: 'id'
        },
        field: 'old_record_id'
    },
    newRecordId: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
            model: Record,
            key: 'id'
        },
        field: 'new_record_id'
    }
}, {
    sequelize,
    modelName: 'RecordUpdate',
    tableName: 'record_update_logs',
    timestamps: false,
});
