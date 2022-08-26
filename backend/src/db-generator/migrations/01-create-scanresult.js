"use strict";

const tableName = "scan-result";

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
				allowNull: false,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			findings: {
				type: Sequelize.JSON,
				allowNull: true,
			},
			queuedAt: {
				type: 'TIMESTAMP',
				allowNull: false,
			},
			scanningAt: {
				type: 'TIMESTAMP',
				allowNull: false,
			},
			finishedAt: {
				type: 'TIMESTAMP',
				allowNull: false,
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