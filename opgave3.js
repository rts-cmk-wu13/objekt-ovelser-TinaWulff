let students = [
    { name: "Sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "m´Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk designer" },
];

let studentListdiv = document.querySelector(".student-list");

students.forEach(function(student) {
    const studentDiv = document.createElement("div");

    studentDiv.textContent =
    student.name + ', Alder: ' + stude
});

