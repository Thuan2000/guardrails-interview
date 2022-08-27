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
    queuedAt: DataTypes.DATE,
    scanningAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE
  },
  {
    tableName: 'scan-result',
    sequelize: Database.sequelize,
    modelName: 'ScanResult'
  }
);

// TODO:Fix this typescript issue
(ScanResult as any).hasMany(ScanResultFinding, {
  foreignKey: 'scanResultId',
  as: 'findings'
});

export default ScanResult;
