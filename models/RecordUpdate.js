'use strict';
const {
    Model, DataTypes
} = require('sequelize');
const Record = require("./Record");
module.exports = (sequelize, DataTypes) => {
    class RecordUpdate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    RecordUpdate.init({
        oldRecordId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //   model: Record,
            //   key: 'id'
            // },
            field: 'old_record_id'
        },
        newRecordId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //   model: Record,
            //   key: 'id'
            // },
            field: 'new_record_id'
        }
    }, {
        sequelize,
        modelName: 'RecordUpdate',
        tableName: 'record_updates',
        timestamps: false
    });
    return RecordUpdate;
};
