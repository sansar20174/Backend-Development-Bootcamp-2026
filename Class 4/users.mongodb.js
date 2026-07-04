use("users");  // users is a database name

// CREATE OPERATION

// db.employees.insertOne(
//   {
//     name: "Sanjay Yadav",
//     age: 40,
//     salary: 5000000,
//     email:"sanjayyadav@example.com"
//   }
// )

// db.employees.insertMany([
//   {
//     name: "Aman Rathore",
//     age: 30,
//     salary: 60000,
//     email: "aman.rathore@gmail.com"
//   },
//   {
//     name: "Sachin Verma",
//     age: 28,
//     salary: 55000,
//     email: "sachin@gmail.com"
//   },
//   {
//     name: "Rohit Rana",
//     age: 35,
//     salary: 70000,
//     email: "rohit345@gmail.com"
//   },
//   {
//     name: "Rohit Rana",
//     age: 32,
//     salary: 65000,
//     email: "rohit2934@gmail.com"
//   },
//   {
//     name: "Devansh Singh",
//     age: 50,
//     salary: 6000000000,
//     email: "devanshsingh5588@gmail.com",
//   }
// ])

 



// READ OPERATION

// findOne - to get one document from the collection
// db.employees.findOne({
//   name:"Devansh Singh"
// })

// // find - to get all documents from the collection
// db.employees.find({
//   name:"Rohit Rana"
// })




// UPDATE OPERATION

// updateOne - to update one document from the collection
// db.employees.updateOne(
//   { name: "Sachin Verma" },  // this one for find
//   { $set: { salary: 60000000 } }  // this one for update
// )

// updateMany - to update many documents from the collection
// db.employees.updateMany(
//   { salary: 5000000}, // this one for find
//   { $set: { empId:00001}} // this one for update
// )

// DELETE OPERATION

// deleteOne - to delete one document from the collection
// db.employees.deleteOne({
//   name: "Rohit Rana"
// });

// deleteMany - to delete many documents from the collection
// db.employees.deleteMany({
//   age: 32
// })
