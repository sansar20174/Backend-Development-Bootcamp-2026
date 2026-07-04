// controller logic for employee data
// this file contains the logic handlers that will be used in the routes to handle the requests and responses

import employee from "../database/data.js";

// GET -> fetch all employee data
const getUser = (req, res) => {
  try {
    res.status(200).json({
      data: employee,
      success: true,
      message: "data fetched successfully...",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to get data",
      error,
    });
  }
};

// POST -> create a new employee
const createUser = (req, res) => {
  const { name, email, empId } = req.body; // object destructuring of request body to get the name,email and empId


  // validation: to check all required fields are present or not
  if (!name || !email || !empId) {
    res.status(400).json({
      success: false,
      message: "should include the name,email and the empId",
    });
  }

  employee.push(name, email, empId);

  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
};

// PUT -> update an existing employee
const updateUser = (req, res) => {
  const { empId, newName } = req.body;

  // validation: to check all required fields
  if (!empId || !newName) {
    res.status(400).json({
      success: false,
      message: "needed empId and name",
    });
  }

  // finding user by empId
  let user = employee.find((value) => value.empId === empId);

  if (!user) {
    res.json({
      success: false,
      message: "user doesn't exists",
    });
  }

  user.name = newName;

  res.json({
    data: employee,
    success: true,
    message: "user updated successfully",
  });
};


// DELETE -> delete an existing employee
const deleteUser = (req,res) => {
    const {empId} = req.body;

    // validation:
    if (!empId) {
        res.status(400).json({
            success:false,
            message:"needed employee id"
        })
    }

    // filtering the user with matching field
    employee = employee.filter((value)=> value.empId!=empId)
    
    res.json({
        success:true,
        message: "user is delted"
    })
}

// exporting controller function so that we can use it in the routes
export { getUser, createUser, updateUser , deleteUser };
