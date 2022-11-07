import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const getUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    if (!user.length > 0) {
      return res.status(404).json({
        message: 'No se econtraron usuarios'
      });
    }
    res.status(500).json({
      message: 'Lista de usuarios',
      data: user
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al listar los usuarios ' + e.message
    });
  }
};
export const register = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(403).json({
      message: 'Complete todos los campos'
    });
  }
  try {
    let contrasenia = bcrypt.hashSync(password, 10);
    const user = await User.create({ email, username, password: contrasenia });
    res.status(200).json({
      message: 'Usuario creado correctamente',
      data: user
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al registrar el usuario ' + e.message
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(403).json({
      message: 'Complete todos los campos'
    });
  }
  try {
    const user = await User.findOne({ where: { email } });
    console.log(bcrypt.compareSync(password, user.password));
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(404).json({
        message: 'Contraseña incorrecta'
      });
    }
    let token = jwt.sign({ id: user.id, user: user.username }, '123', {
      expiresIn: '30days'
    });
    res.status(200).json({
      message: 'Bienvenido ' + user.username,
      data: token
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al iniciar sesión ' + e.message
    });
  }
};
