let personTina = {
    firstname: "Tina",
    lastname: "Wulff",
    age: 34,
    numberOfChildren: 1,
    childName: "Asta",
    city: "Copenhagen",
    married: false,
    educations: ["artist", "grafic design UX/UI", "Web-developer"],
    artist: {
        type: "Fine art",
        mediums: ["painting", "conceptual", "mixed-media"], //nested object
        educationYear: 2020
    }
}


console.log(personTina.artist.educationYear);


personTina.educations.forEach(function (education) {
    console.log(education)
});


personTina.artist.mediums.forEach(function (medium) {
    console.log(medium)
});
