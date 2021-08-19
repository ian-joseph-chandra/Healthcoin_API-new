'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED
            },
            roleId: {
                type: Sequelize.BIGINT.UNSIGNED,
                references: {
                    model: 'UserRole'
                },
                allowNull: false,
                field: 'role_id'
            },
            blockchainId: {
                type: Sequelize.BIGINT.UNSIGNED,
                references: {
                    model: 'Blockchain'
                },
                field: 'blockchain_id'
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            birthDate: {
                type: Sequelize.DATE,
                allowNull: false,
                field: 'birth_date'
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nationalId: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
                field: 'national_id'
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
