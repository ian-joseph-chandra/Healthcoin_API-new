'use strict';
const {
    Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RecordAccess extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {foreignKey: 'patient_id', as: 'patient'});
        }
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
    return RecordAccess;
};
