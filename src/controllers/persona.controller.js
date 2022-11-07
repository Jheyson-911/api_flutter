import { Persona } from '../models/persona.model.js';

export const getPersonas = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    if (!personas.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron personas'
      });
    }
    res.status(200).json({
      message: 'Lista de personas',
      data: personas
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al listar las personas ' + e.message
    });
  }
};

export const createPersona = async (req, res) => {
  const { nombre, ap_paterno, ap_materno, telefono, dni, genero, correo } =
    req.body;
  console.log(nombre);
  if (
    !nombre ||
    !ap_paterno ||
    !ap_materno ||
    !telefono ||
    !dni ||
    !genero ||
    !correo
  ) {
    return res.status(403).json({
      message: 'Complete todos los campos'
    });
  }
  try {
    const persona = await Persona.create({
      nombre,
      ap_paterno,
      ap_materno,
      telefono,
      dni,
      genero,
      correo
    });
    res.status(200).json({
      message: 'Persona creada correctamente',
      data: persona
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al crear la persona ' + e.message
    });
  }
};

export const updatePersona = async (req, res) => {
  const { id } = req.params;
  const { nombre, ap_paterno, ap_materno, telefono, dni, genero, correo } =
    req.body;
  if (!id > 0) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  if (
    !nombre ||
    !ap_paterno ||
    !ap_materno ||
    !telefono ||
    !dni ||
    !genero ||
    !correo
  ) {
    return res.status(403).json({
      message: 'Complete todos los campos'
    });
  }
  try {
    const persona = await Persona.update(
      {
        nombre,
        ap_paterno,
        ap_materno,
        telefono,
        dni,
        genero,
        correo
      },
      { where: { id } }
    );
    res.status(200).json({
      message: 'Persona actualizada correctamente',
      data: persona
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al actualizar la persona ' + e.message
    });
  }
};

export const getPersonaById = async (req, res) => {
  const { id } = req.params;
  if (!id > 0) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    const persona = await Persona.findOne({ where: { id } });
    res.status(200).json({
      message: 'Persona encontrada',
      data: persona
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al encontrar la persona ' + e.message
    });
  }
};
export const deletePersona = async (req, res) => {
  const { id } = req.params;
  if (!id > 0) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    const persona = await Persona.destroy({ where: { id } });
    res.status(200).json({
      message: 'Persona eliminada correctamente',
      data: persona
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al eliminar la persona ' + e.message
    });
  }
};
