function attendanceChecker() {
    var randomValue = Math.random(); // Generate a random number between 0 and 1
    var status = randomValue < 0.5 ? "Absent" : "Present"; // Determine attendance status

    if (status === "Present") {
        console.log("Employee is Present.");
    } else {
        console.log("Employee is Absent.");
    }

    return status;
}
function calculateDailyWage() {
    const HOURLY_WAGE_RATE = 20; 
    var randomValue = Math.random();
    var employmentState;
    var dailyWage = 0;

    // Determine employment type
    if (randomValue > 0 && randomValue <= 0.3) {
        employmentState = "FULL_TIME";
    } else if (randomValue > 0.3 && randomValue <= 0.6) {
        employmentState = "PART_TIME";
    } else {
        employmentState = "NO_TIME";
    }

    // Calculate daily wage based on employment state
    switch (employmentState) {
        case "FULL_TIME":
            dailyWage = 8 * HOURLY_WAGE_RATE; 
            console.log("Full-Time: Daily Wage is $" + dailyWage);
            break;

        case "PART_TIME":
            dailyWage = 4 * HOURLY_WAGE_RATE; 
            console.log("Part-Time: Daily Wage is $" + dailyWage);
            break;

        default:
            console.log("No Work: Daily Wage is $0");
    }
}

calculateDailyWage();

