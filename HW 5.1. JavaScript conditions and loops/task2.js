const averageGrade = 100;
let level;

switch (true){
    case averageGrade < 60:
        level = "Unsatisfactorily";
        break;
    case averageGrade <= 70:
        level = "Satisfactorily";
        break;
    case averageGrade <= 80:
        level = "Good";
        break;
    case averageGrade <= 90:
        level = "Very good";
        break;
    case averageGrade <= 100:
        level = "Perfectly";
        break;
    default:
        level = "Unknown"
}

console.log(level);