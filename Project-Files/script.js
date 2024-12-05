function attendanceChecker() {
    var randomValue = Math.random(); // Generate a random number between 0 and 1
    var status = randomValue < 0.5 ? "Absent" : "Present"; // Determine attendance status

    // if (status === "Present") {
    //     console.log("Employee is Present.");
    // } else {
    //     console.log("Employee is Absent.");
    // }

    return status;
}
function calculateDailyWage() {
    const HOURLY_WAGE_RATE = 20; 
    let randomValue = Math.random();
    let employmentState;
    let dailyWage = 0;

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
            dailyWage = getWorkingHours(employmentState) * HOURLY_WAGE_RATE; 
            console.log("Full-Time: Daily Wage is $" + dailyWage);
            break;

        case "PART_TIME":
            dailyWage = getWorkingHours(employmentState) * HOURLY_WAGE_RATE; 
            console.log("Part-Time: Daily Wage is $" + dailyWage);
            break;

        default:
            console.log("No Work: Daily Wage is $0");
    }

    return {dailyWage,employmentState};
}

function getWorkingHours(employmentState) {
    switch (employmentState) {
        case "FULL_TIME":
            return 8; // Full-time hours
        case "PART_TIME":
            return 4; // Part-time hours
        default:
            return 0; // No work
    }
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
    let workingHours = getWorkingHours(employmentState);
    dailyWage = workingHours * HOURLY_WAGE_RATE;

    return { dailyWage, employmentState, workingHours };
}

function getWorkingHours(employmentState) {
    if (employmentState === "FULL_TIME") return 8;
    if (employmentState === "PART_TIME") return 4;
    return 0;
}

function wagesForTwentyDays() {
    let totalWage = 0;
    let totalWorkingHours = 0;

    console.log("Day\tStatus\t\tType\t\tHours\tWage");

    for (let i = 1; i <= 20; i++) {
        let status = attendanceChecker();

        if (status === "Present") {
            let { dailyWage, employmentState, workingHours } = calculateDailyWage();
            totalWage += dailyWage;
            totalWorkingHours += workingHours;
            console.log(`${i}\t${status}\t${employmentState}\t${workingHours}\t${dailyWage}`);
        } else {
            console.log(`${i}\t${status}\t-\t\t0\t0`);
        }
    }

    console.log("\nTotal Working Hours: " + totalWorkingHours);
    console.log("Total Wage Earned: $" + totalWage);

    return {totalWorkingHours, totalWage};
}

function calculateWagesWithConditions() {
    const MAX_WORKING_HOURS = 160; // Maximum allowed working hours
    const MAX_WORKING_DAYS = 20; // Maximum allowed working days

    let totalWage = 0;
    let totalWorkingHours = 0;
    let workingDay = 0;

    console.log("Day\tStatus\t\tType\t\tHours\tWage");

    while (totalWorkingHours < MAX_WORKING_HOURS && workingDay < MAX_WORKING_DAYS) {
        workingDay++; // Increment working day
        let status = attendanceChecker();

        if (status === "Present") {
            let { dailyWage, employmentState, workingHours } = calculateDailyWage();

            if (totalWorkingHours + workingHours > MAX_WORKING_HOURS) {
                workingHours = MAX_WORKING_HOURS - totalWorkingHours;
                dailyWage = workingHours * 20;
            }

            totalWorkingHours += workingHours; // Update total working hours
            totalWage += dailyWage; // Update total wage

            console.log(`${workingDay}\t${status}\t${employmentState}\t${workingHours}\t${dailyWage}`);
        } else {
            console.log(`${workingDay}\t${status}\t-\t\t0\t0`);
        }
    }

    console.log("\nTotal Working Hours: " + totalWorkingHours);
    console.log("Total Wage Earned: $" + totalWage);
}

function calculateWagesForAYear(){
    let yearlyWage = 0;
    let yearlyWorkingHours = 0;
    console.log("Printing the wages for a year/12 months: ");
    for(let month = 1; month <= 12; month++){
        let {totalWage, totalWorkingHours} = wagesForTwentyDays();
        yearlyWage += totalWage;
        yearlyWorkingHours += totalWorkingHours;
    }

    console.log("================================================");
    console.log(`The total wage for the year is ${yearlyWage} and the total working hours for the year is ${yearlyWorkingHours}.`);
}

calculateWagesForAYear();

// console.log("\nWages for 20 Days:");
// wagesForTwentyDays();

// console.log("\nWages With Conditions (160 hours or 20 days):");
// calculateWagesWithConditions();


// console.log("Full-Time Hours: " + getWorkingHours("FULL_TIME"));
// console.log("Part-Time Hours: " + getWorkingHours("PART_TIME"));
// console.log("No Work Hours: " + getWorkingHours("NO_TIME"));


