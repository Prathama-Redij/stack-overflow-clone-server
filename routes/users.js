import express from 'express';
 
import { login, signup } from '../controllers/auth.js';
import { getAllUsers, updateProfile } from '../controllers/Users.js'
import auth from '../midwares/auth.js'

const router = express.Router();

// router.post();

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers', getAllUsers)
router.patch('/Update/:id', auth, updateProfile)
export default router