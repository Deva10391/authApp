import express from 'express';
import { signUp, signIn, google, signOut } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/google', google);
router.post('/signout', signOut);

export default router;