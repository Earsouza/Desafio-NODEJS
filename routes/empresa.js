import express from 'express';
import { createEmpresa, getEmpresas, getEmpresa, deleteEmpresa, updateEmpresa } from '../controllers/empresa.js';

const router = express.Router();

router.get('/', getEmpresas);

router.post('/', createEmpresa);

router.get('/:id', getEmpresa);

router.delete('/:id', deleteEmpresa);

router.patch('/:id', updateEmpresa);

export default router;