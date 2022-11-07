import jwt from 'jsonwebtoken';
export const verifyToken = (req, res, next) => {
  let token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'No autorizado'
    });
  }
  try {
    token = token.split(' ')[1];
    const verificartoken = jwt.verify(token, '123');
    next();
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al verificar el token ' + e.message
    });
  }
};
