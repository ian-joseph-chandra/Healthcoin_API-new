const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize,
    User = require('./User'),
    Hospital = require('./Hospital')

class DoctorHospital extends Model {
}

DoctorHospital.init({
    doctorId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: User,
            key: 'id'
        },
        field: 'doctor_id'
    },
    hospitalId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: Hospital,
            key: 'id'
        },
        field: 'hospital_id'
    }
}, {
    sequelize,
    modelName: 'DoctorHospital',
    tableName: 'doctors_hospitals',
    timestamps: false,
});
