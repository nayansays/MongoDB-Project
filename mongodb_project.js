// MongoDB NoSQL Database Project
// Student Management System

// Select Database
use StudentDB;

// Create Collection
db.createCollection("Students");

// CREATE - Insert 40 Students
db.Students.insertMany([
  { student_id: 1, name: "Aarav Sharma", age: 20, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 2, name: "Ananya Singh", age: 21, course: "BCA", semester: 6, city: "Kanpur" },
  { student_id: 3, name: "Aditya Verma", age: 20, course: "BCA", semester: 6, city: "Raebareli" },
  { student_id: 4, name: "Priya Gupta", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 5, name: "Rahul Yadav", age: 20, course: "BCA", semester: 6, city: "Prayagraj" },
  { student_id: 6, name: "Sneha Mishra", age: 21, course: "BCA", semester: 6, city: "Ayodhya" },
  { student_id: 7, name: "Rohan Singh", age: 20, course: "BCA", semester: 6, city: "Varanasi" },
  { student_id: 8, name: "Neha Sharma", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 9, name: "Vivek Kumar", age: 20, course: "BCA", semester: 6, city: "Agra" },
  { student_id: 10, name: "Pooja Verma", age: 21, course: "BCA", semester: 6, city: "Kanpur" },
  { student_id: 11, name: "Aryan Singh", age: 20, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 12, name: "Simran Gupta", age: 21, course: "BCA", semester: 6, city: "Delhi" },
  { student_id: 13, name: "Kunal Yadav", age: 20, course: "BCA", semester: 6, city: "Meerut" },
  { student_id: 14, name: "Ishita Sharma", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 15, name: "Mohit Verma", age: 20, course: "BCA", semester: 6, city: "Bareilly" },
  { student_id: 16, name: "Kavya Singh", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 17, name: "Abhishek Kumar", age: 20, course: "BCA", semester: 6, city: "Gorakhpur" },
  { student_id: 18, name: "Muskan Gupta", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 19, name: "Nikhil Sharma", age: 20, course: "BCA", semester: 6, city: "Agra" },
  { student_id: 20, name: "Riya Verma", age: 21, course: "BCA", semester: 6, city: "Kanpur" },
  { student_id: 21, name: "Yash Singh", age: 20, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 22, name: "Sakshi Yadav", age: 21, course: "BCA", semester: 6, city: "Prayagraj" },
  { student_id: 23, name: "Harsh Gupta", age: 20, course: "BCA", semester: 6, city: "Varanasi" },
  { student_id: 24, name: "Nandini Sharma", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 25, name: "Ayush Verma", age: 20, course: "BCA", semester: 6, city: "Raebareli" },
  { student_id: 26, name: "Shreya Singh", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 27, name: "Manish Kumar", age: 20, course: "BCA", semester: 6, city: "Ayodhya" },
  { student_id: 28, name: "Aditi Gupta", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 29, name: "Saurabh Yadav", age: 20, course: "BCA", semester: 6, city: "Kanpur" },
  { student_id: 30, name: "Tanya Sharma", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 31, name: "Ritesh Singh", age: 20, course: "BCA", semester: 6, city: "Bareilly" },
  { student_id: 32, name: "Palak Verma", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 33, name: "Deepak Gupta", age: 20, course: "BCA", semester: 6, city: "Meerut" },
  { student_id: 34, name: "Komal Singh", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 35, name: "Varun Sharma", age: 20, course: "BCA", semester: 6, city: "Gorakhpur" },
  { student_id: 36, name: "Ritika Gupta", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 37, name: "Akash Verma", age: 20, course: "BCA", semester: 6, city: "Kanpur" },
  { student_id: 38, name: "Divya Singh", age: 21, course: "BCA", semester: 6, city: "Lucknow" },
  { student_id: 39, name: "Shubham Yadav", age: 20, course: "BCA", semester: 6, city: "Prayagraj" },
  { student_id: 40, name: "Megha Sharma", age: 21, course: "BCA", semester: 6, city: "Lucknow" }
]);

// READ - Display all students
db.Students.find();

// READ - Find one student
db.Students.findOne({ student_id: 1 });

// UPDATE - Change city of student 1
db.Students.updateOne(
  { student_id: 1 },
  { $set: { city: "Delhi" } }
);

// DELETE - Delete student 40
db.Students.deleteOne(
  { student_id: 40 }
);

// Display final data
db.Students.find();
