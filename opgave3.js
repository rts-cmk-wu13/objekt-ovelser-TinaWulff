

let students = [
    { name: "Sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk designer" },
];

let studentListDiv = document.querySelector(".student-list");


students.forEach(function(student) {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student")
    studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentListDiv.appendChild(studentDiv);
    // student.name + ', Alder: ' + student.age + 'Uddannelse:' + student.course;
  
});


students.forEach(student => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student")
    let studentHeadline = document.createElement("h2");
    studentHeadline.textContent = student.name;
    let studentInfo = document.createElement("p")
    studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentDiv.appendChild(studentHeadline);
    studentDiv.appendChild(studentInfo)
    studentListDiv.appendChild(studentDiv);
});





