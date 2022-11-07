import {
  getPersonas,
  createPersona,
  deletePersona,
  getPersonaById,
  updatePersona
} from '../controllers/persona.controller.js';
import { Router } from 'express';

const router = new Router();

router.get('/all', getPersonas);
router.get('/:id', getPersonaById);
router.put('/:id', updatePersona);
router.delete('/:id', deletePersona);
router.post('/create', createPersona);

export default router;
