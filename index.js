import express from 'express';
import bodyParser from 'body-parser';


import userRoutes from './routes/users.js'


const app = express();

const PORT = 5001;

app.use(bodyParser.json());

app.use('/users', userRoutes);  

app.get('/', (req, res) => {
    console.log('[Test]');
    res.send('Hello from Ama')
})

app.listen(PORT, ()=> {console.log(`listening on port: http://localhost:${PORT}`);});