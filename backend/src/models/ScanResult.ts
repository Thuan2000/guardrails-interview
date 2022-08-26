/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { Model, DataTypes } from "sequelize";
import Database from "../services/database.service";
import ScanResultFinding from './ScanResultFinding';

class ScanResult extends Model {
  static associate() {
    // define association here
  }
}

// Initialize Model
ScanResult.init(
  {
    repositoryName: DataTypes.STRING,
    status: DataTypes.STRING,
    findings: DataTypes.JSON,
    queuedAt: 'TIMESTAMP',
    scanningAt: 'TIMESTAMP',
    finishedAt: 'TIMESTAMP'
  },
  {
    tableName: "scan-result",
    sequelize: Database.sequelize,
    modelName: "ScanResult"
  }
);

ScanResult.hasMany(ScanResultFinding, {
  foreignKey: "scanResultId",
});

export default ScanResult;
