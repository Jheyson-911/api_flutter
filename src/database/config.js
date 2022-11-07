import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('api_flutter', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
