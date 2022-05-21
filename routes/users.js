import express from 'express';

const router = express.Router();

import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doris",
        age: 23
    }
]


router.get('/', (req, res) => {
    res.send(users)
 })

router.post('/',(req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id: userId };

    users.push(userWithId);
    res.send(`User with the name ${userWithId.firstName} added`);
   
}) 

 export default router;