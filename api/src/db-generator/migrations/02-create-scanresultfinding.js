'use strict';

const tableName = 'scan-result-finding';

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
			type: {
				type: Sequelize.STRING,
				allowNull: false
			},
			scanResultId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			ruleId: {
				type: Sequelize.STRING,
				allowNull: false
			},
			location: {
				type: Sequelize.JSON,
				allowNull: true
			},
			metadata: {
				type: Sequelize.JSON,
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