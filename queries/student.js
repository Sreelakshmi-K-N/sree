db.StudentsDetails2.insertMany([
  { "_id": 1, "std_name": "Mukesh", "Gender": "Male", "class": "VI", "age": 11, "grd_point": 33 },
  { "_id": 2, "std_name": "Dechamma", "Gender": "Female", "class": "VI", "age": 13, "grd_point": 30 },
  { "_id": 3, "std_name": "Akash", "Gender": "Male", "class": "V", "age": 14, "grd_point": 35.1257 },
  { "_id": 4, "std_name": "Geetha", "Gender": "Female", "class": "X", "age": 17, "grd_point": 36.2514 },
  { "_id": 5, "std_name": "Bhomika", "Gender": "Female", "class": "X", "age": 19, "grd_point": 35.5201 },
  { "_id": 6, "std_name": "Nitin", "Gender": "Male", "class": "V", "age": 16, "grd_point": 35.5201 }
]);



// Fetches Details Whose Age is Greater Than 18 
db.StudentsDetails2.find({ age: { $gt: 18 } });

//Display No Of Students Whose Age >18
db.StudentsDetails2.find({ age: { $gt: 18 } }).count();

//Display Students Details Whose grd_point >30 
db.StudentsDetails2.find({ grd_point: { $gt: 30 } });

//Display Students Details Whose Age Is Less Than 20 
db.StudentsDetails2.find({ age: { $lt: 20 } });

//Display No of Students Whose Age <20 
db.StudentsDetails2.find({ age: { $lt: 20 } }).count();

//Display Students Details Whose grd_point  Is Less Than 35
db.StudentsDetails2.find({ grd_point: { $lt: 35 } });

//Without Using And Operator Display Students Whose Age Is Less Than 24 And Greater Than 17 
db.StudentsDetails2.find({ $nor: [{ age: { $not: { $lt: 24 } } }, { age: { $not: { $gt: 17 } } }] });

//Display Students Details Whose Age Not Equal To 30 
db.StudentsDetails2.find({ age: { $ne: 30 } });

//Without Using and Operator Display Students Whose grd_Point Is Less Than 35 And Greater Than 30 
db.StudentsDetails2.find({ $nor: [{ grd_point: { $not: { $lt: 35 } } }, { grd_point: { $not: { $gt: 30 } } }] });

//Without Using and Operator, Display No Of Student(Count) Details Whose Age Is Less Than 35 And Greater Than 30 
db.StudentsDetails2.find({ $nor: [{ age: { $not: { $lt: 35 } } }, { age: { $not: { $gt: 30 } } }] }).count();

//Demonstrate Use Of nin. The $Nin Stands for "Not In." As The Name Implies, 
//• It Is Used to Find None Of The Values Specified In An Array. 
//• Query to find student details age not in [11,13,19,20] 
db.StudentsDetails2.find({ age: { $nin: [11, 13, 19, 20] } });

//Find Student Details Age Not In [11,13] And Display Only Std_Name, Age And Class 
db.StudentsDetails2.find({ age: { $nin: [11, 13] } }, { std_name: 1, age: 1, class: 1 });