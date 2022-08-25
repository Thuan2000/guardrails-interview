import { DataTypes, Model, ModelStatic } from 'sequelize';
import Database from '../services/database.service';

class ScanResult extends Model {}

// Initialize Model
ScanResult.init(
  {
    repositoryName: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize: Database.sequelize,
    modelName: 'ScanResult'
  }
);

export default ScanResult;
