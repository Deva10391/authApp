import express from 'express';
import { updateUser, deleteUser } from '../controller/user.controller.js';
import { verifiedToken } from '../utils/verifiedUser.js';

const router = express.Router();

router.post('/update/:id', verifiedToken, updateUser);
router.delete('/delete/:id', verifiedToken, deleteUser);

export default router;