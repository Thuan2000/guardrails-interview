'use strict';

const tableName = 'scan-result';

module.exports = {
	tableName,
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(tableName, {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			repositoryName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false
			},
			queuedAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			scanningAt: {
				type: Sequelize.DATE,
				allowNull: true
			},
			finishedAt: {
				type: Sequelize.DATE,
				allowNull: true
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date()
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date()
			}
		});
	},
	down: async queryInterface => {
		await queryInterface.dropTable(tableName);
	}
};