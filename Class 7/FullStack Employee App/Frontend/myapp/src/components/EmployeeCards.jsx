import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { getuser } from '../service/api'

const EmployeeCards = () => {
  const[users, setUsers] = useState([])
  async function getUserData(){
    try {
      const response = await axios.get(getuser)
      console.log(response.data.user )

      setUsers(response.data.user)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserData()
  },[])
  
  return (
    <div>
        <h1>Employee System App</h1>
        <form>
            <input placeholder='Name'/><br/>
            <input placeholder='Email'/><br/>
            <input placeholder='Emp. Id'/><br/>
            <button>Sumbit</button>
        </form>


        <div>
          {
            users.map((item,i)=>{
              return <div key={i}>
                <p>Name : {item.name}</p>
                <p>Email : {item.email}</p>
                <p>Emp. Id: {item.empId}</p>
                <div>
                  <button>Delete</button>
                  <button>Edit</button>
                </div>
                <hr/>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default EmployeeCards