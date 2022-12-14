/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */
 
import 'dotenv/config';
import { Options, Sequelize } from 'sequelize';

export enum ESequelizeDialect {
  MYSQL = 'mysql',
  MARIADB = 'mariadb',
  MSSQL = 'mssql',
  POSTGRES = 'postgres',
  SQLITE = 'sqlite'
}

function getDatabaseConnectionConfig(): Options {
  return {
    dialect: process.env.DB_DIALECT as ESequelizeDialect,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT + ''),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false
  };
}
class Database {
  static sequelize = new Sequelize(getDatabaseConnectionConfig());

  static async connect() {
    try {
      await this.sequelize.authenticate();
      console.log('Database Connection OK');
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;
