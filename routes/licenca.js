import express from 'express';
import { createLicenca, getLicencas, getLicenca, deleteLicenca, updateLicenca } from '../controllers/licenca-controller.js';

const router = express.Router();

router.get('/', getLicencas);

router.post('/', createLicenca);

router.get('/:id', getLicenca);

router.delete('/:id', deleteLicenca);

router.patch('/:id', updateLicenca);

export default router;