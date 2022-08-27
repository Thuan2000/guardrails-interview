/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { Model, DataTypes } from "sequelize";
import Database from "../services/database.service";

class ScanResultFinding extends Model {
	static associate() {
		// define association here
	}
}

ScanResultFinding.init(
	{
		type: DataTypes.STRING,
		ruleId: DataTypes.STRING,
		location: DataTypes.JSON,
		metadata: DataTypes.JSON,
		scanResultId: DataTypes.INTEGER
	},
	{
		tableName: "scan-result-finding",
		sequelize: Database.sequelize,
		modelName: "ScanResultFinding"
	}
);

export default ScanResultFinding;