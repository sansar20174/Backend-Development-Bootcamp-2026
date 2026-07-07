
import User from '../model/user.js'

const createUser = async (req,res)=> {

    try {
        
        const {name, email, empId} = req.body

        console.log(name, email, empId)

        if(!name || !email || !empId){
           return res.status(404).json({
                message:'data not found'
            })
        }
        // data creation  .....

        const user = await User.create({name, email, empId})

        console.log(user)

        // send response to user

        res.status(200).json({
            success:true,
            message:'data created successfully...',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'data has not created',error
        })
    }
}



const getUser = async (req,res)=> {
    try {
        console
    }catch (error) {}
}

const updateUser = async (req,res)=> {
}

export {createUser}