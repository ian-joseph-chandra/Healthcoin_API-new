const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize,
    Record = require('./Record');

class RecordAccess extends Model {
}

RecordAccess.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true
    },
    patientId: {
        type: DataTypes.BIGINT.UNSIGNED,
        references: {
            model: 'User'
        },
        allowNull: false,
        field: 'patient_id'
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    terminatedAt: {
        type: DataTypes.DATE,
        // allowNull: false
    }
}, {
    sequelize,
    modelName: 'RecordAccess',
    tableName: 'record_accesses'
});
