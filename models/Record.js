const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize,
    User = require('./User'),
    Hospital = require('./Hospital');

class Record extends Model {
}

Record.init({
    id: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        primaryKey: true
    },
    patientId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false,
        field: 'patient_id'
    },
    doctorId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false,
        field: 'doctor_id'
    },
    hospitalId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: Hospital,
            key: 'id'
        },
        allowNull: false,
        field: 'hospital_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'birth_date'
    },
    hashValue: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'hash_value'
    },
    contractAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'contract_address'
    },
    diseaseName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'disease_name'
    },
    diagnose: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Record',
    tableName: 'records'
});
