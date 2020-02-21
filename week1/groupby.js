let students = [{
    name: "Daniel Taskoff",
    course : "Frontend JavaScript"
  }, {
    name : "Elena Jeleva",
    course : "Programming 101"
  }, {
    name : "Luboslava Dimitrova",
    course : "Frontend JavaScript"
  }, {
    name : "Anton Antonov",
    course : "Core Java"
  }, {
    name : "Nikola Dichev",
    course : "Core Java"
  }];


let studentCourses = students.map(students => students.course);
let filteredCourses= studentCourses.filter((item, index) => studentCourses.indexOf(item) === index);

let result = filteredCourses.map((course) => {
 let filteredStudents = students.filter((student) => student.course === course)

  return {[course]: filteredStudents} 

})



console.log(result[0]);