const students = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    grades: [85, 92, 78]
  },
  {
    id: 2,
    name: "John Smith",
    age: 21,
    grades: [55, 60, 58]
  },
  {
    id: 3,
    name: "Mary Brown",
    age: 19,
    grades: [95, 88, 91]
  },
  {
    id: 4,
    name: "David Wilson",
    age: 22,
    grades: [72, 68, 75]
  },
  {
    id: 5,
    name: "Sarah Davis",
    age: 20,
    grades: [45, 50, 55]
  }
];

console.log("Original Students:");
console.log(students);


function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return (total / grades.length).toFixed(2);
}


const studentsWithAverage = students.map(student => ({
  ...student,
  average: calculateAverage(student.grades)
}));

console.log("\nStudents With Average:");
console.log(studentsWithAverage);


function getPassingStudents(students) {
  return students.filter(student => parseFloat(student.average) >= 60);
}

const passingStudents = getPassingStudents(studentsWithAverage);

console.log("\nPassing Students:");
console.log(passingStudents);


function processStudents(students, callback) {
  return students.map(student => callback(student));
}

function addLetterGrade(student) {
  const average = parseFloat(student.average);

  let letterGrade;

  if (average >= 90) {
    letterGrade = "A";
  } else if (average >= 80) {
    letterGrade = "B";
  } else if (average >= 70) {
    letterGrade = "C";
  } else if (average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    ...student,
    letterGrade
  };
}


function addStatus(student) {
  return {
    ...student,
    status: parseFloat(student.average) >= 60 ? "Pass" : "Fail"
  };
}


const studentsWithGrades = processStudents(
  studentsWithAverage,
  addLetterGrade
);

console.log("\nStudents With Letter Grades:");
console.log(studentsWithGrades);

const studentsWithStatus = processStudents(
  studentsWithAverage,
  addStatus
);

console.log("\nStudents With Status:");
console.log(studentsWithStatus);


function findStudentById(students, id) {
  const student = students.find(student => student.id === id);
  return student || null;
}

const student = findStudentById(studentsWithAverage, 3);

console.log("\nStudent With ID 3:");
console.log(student);


const missingStudent = findStudentById(studentsWithAverage, 10);

console.log("\nStudent With ID 10:");
console.log(missingStudent);