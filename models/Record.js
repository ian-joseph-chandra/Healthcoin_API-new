'use strict';
const {
    Model, DataTypes
} = require('sequelize');
const User = require("./User");
const Hospital = require("./Hospital");
module.exports = (sequelize, DataTypes) => {
    class Record extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {foreignKey: 'patient_id', as: 'patient'});
            this.belongsTo(models.User, {foreignKey: 'doctor_id', as: 'doctor'});
            this.belongsTo(models.Hospital, {foreignKey: 'hospital_id', as: 'hospital'});
            // this.hasOne(models.Record, {
            //     through: ''
            // })
        }
    }
    Record.init({
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        patientId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //     model: User,
            //     key: 'id'
            // },
            allowNull: false,
            field: 'patient_id'
        },
        doctorId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //     model: User,
            //     key: 'id'
            // },
            allowNull: false,
            field: 'doctor_id'
        },
        hospitalId: {
            type: DataTypes.BIGINT.UNSIGNED,
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
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Record',
        tableName: 'records'
    });
    return Record;
};
