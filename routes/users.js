import express from 'express';
const router = express.Router();
import {getUserDetails, newUserRegister, login,logout } from '../controller/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
router.post('/new', newUserRegister)
router.post('/login',login);
router.get('/logout',logout);
router.get('/userdetails/',isAuthenticated,getUserDetails)

//If we have multiple routes we can use this:-
// router.route('/usersid/').get(getUserId);

// router.put('/usersid/', putUser )
// router.delete('/usersid/',deleteUser)
export default router