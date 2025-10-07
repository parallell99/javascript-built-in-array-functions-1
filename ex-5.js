const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
 let totalscore = students.reduce((sum , students)=> {
  return sum + students.score
 },0)
 let average = totalscore/students.length
 return average

}



console.log(getAverageStudentScore(students)); // Output: 87.5
