'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hospital extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Record, {foreignKey: 'hospital_id', as: 'records'});

            this.belongsToMany(models.User, {
                through: 'doctors_hospitals',
                foreignKey: 'hospital_id',
                otherKey: 'doctor_id',
                as: 'doctors'
            });
        }
    }

    Hospital.init({
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        blockchainId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //     model: 'Blockchain'
            // },
            field: 'blockchain_id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Hospital',
        tableName: 'hospitals',
        timestamps: false
    });
    return Hospital;
};
