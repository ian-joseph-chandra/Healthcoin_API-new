'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('doctors_hospitals', {
            doctor_id: {
                type: Sequelize.BIGINT
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('doctors_hospitals');
    }
};
