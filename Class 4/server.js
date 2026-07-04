import express from 'express';
import route from './routes/userRoute.js'
import cors from 'cors'

const app = express();


// mounting
app.use(cors())

app.use(express.json())
app.use(route) 

const port = 4000

app.get('/', (req,res) => {
    res.send("welcome to coding")
})

app.listen(port, () => {
    console.log("server is running in port", port);
    
})