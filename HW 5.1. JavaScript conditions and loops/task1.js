const averageGrade = 100;
let level;
if (averageGrade < 60) {
    level = "Unsatisfactorily";
} else if (averageGrade <= 70) {
    level = "Satisfactorily";
} else if (averageGrade <= 80) {
    level = "Good";
} else if (averageGrade <= 90) {
    level = "Very good";
} else if (averageGrade <= 100) {
    level = "Perfectly";
} else {
    level = "Unknown"
}

console.log(level);