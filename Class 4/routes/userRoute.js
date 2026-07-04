// jo logic likha tha controller me, yaha usko endpoint defind kara hai bss!

import express from 'express';
import {getUser, createUser , updateUser, deleteUser} from '../controller/userLogic.js'

const route = express.Router() //default function to create route and here express is object and Router is method of express object which will create a route for us

route.get('/getUser', getUser) // getUser tab call hga jab /getUser endpoint hit hoga
route.post('/createUser', createUser)
route.put('/updateUser', updateUser)
route.delete('/deleteUser', deleteUser)


// exporting the route so that can build connection in server.js
export default route