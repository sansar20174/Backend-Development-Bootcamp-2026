import employee from '../database/data.js'

function getUser(req,res){
    try {
        res.status(200).json({
            success:true,
            message:'data fetched successfully...',
            data:employee
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to get data',error
        })
    }
}


 


export {getUser}