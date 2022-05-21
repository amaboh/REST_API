import express from 'express';

const router = express.Router();

import {getUsers, createUsers, deleteUser, getUser, undateUser} from '../controllers/users.js'


router.get('/', getUsers );

router.post('/',createUsers); 
 

router.get('/:id',getUser );

router.delete('/:id',deleteUser);

router.patch('/:id', undateUser);

 export default router;