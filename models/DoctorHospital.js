'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DoctorHospital extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DoctorHospital.init({
        doctorId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //     model: User,
            //     key: 'id'
            // },
            field: 'doctor_id',
            allowNull: false
        },
        hospitalId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //     model: Hospital,
            //     key: 'id'
            // },
            field: 'hospital_id',
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'DoctorHospital',
        tableName: 'doctors_hospitals',
        timestamps: false,
        primaryKey: false
    });
    return DoctorHospital;
};
