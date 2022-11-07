import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Persona = sequelize.define('Persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  ap_paterno: {
    type: DataTypes.STRING
  },
  ap_materno: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  dni: {
    type: DataTypes.STRING
  },
  genero: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  }
});
