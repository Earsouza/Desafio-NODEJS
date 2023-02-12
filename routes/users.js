import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Eduardo",
        lastName: "Souza",
        age: 21
    },
    {
        firstName: "Jessica",
        lastName: "Lobo",
        age: 19 
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) =>{
    const user = req.body;

    users.push(user);

    res.send(`Users with the name ${user.firstName} added in Database!`);    
});

export default router;