'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('blockchains', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false
            },
            balance: {
                type: Sequelize.BIGINT.UNSIGNED,
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('blockchains');
    }
};
