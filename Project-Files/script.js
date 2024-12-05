var employeeMonthlyData = [];
var monthsOfTheYear = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function attendanceChecker() {
    var randomValue = Math.random();
    var status = randomValue < 0.5 ? "Absent" : "Present";
    return status;
}

function calculateDailyWage() {
    const HOURLY_WAGE_RATE = 20;
    let randomValue = Math.random();
    let employmentState;
    let dailyWage = 0;
    let workingHours = 0;

    if (randomValue > 0 && randomValue <= 0.3) {
        employmentState = "FULL_TIME";
    } else if (randomValue > 0.3 && randomValue <= 0.6) {
        employmentState = "PART_TIME";
    } else {
        employmentState = "NO_TIME";
    }

    workingHours = getWorkingHours(employmentState);
    dailyWage = workingHours * HOURLY_WAGE_RATE;

    return { dailyWage, employmentState, workingHours };
}

function getWorkingHours(employmentState) {
    switch (employmentState) {
        case "FULL_TIME":
            return 8;
        case "PART_TIME":
            return 4;
        default:
            return 0;
    }
}

function wagesForTwentyDays() {
    let totalWage = 0;
    let totalWorkingHours = 0;

    console.log("Day\tStatus\t\tEmployment Type\tWorking Hours\tDaily Wage");
    console.log("--------------------------------------------------------------");

    for (let i = 1; i <= 20; i++) {
        let status = attendanceChecker();

        if (status === "Present") {
            let { dailyWage, employmentState, workingHours } = calculateDailyWage();
            totalWage += dailyWage;
            totalWorkingHours += workingHours;
            console.log(
                i + "\t" + status + "\t" + employmentState + "\t" + workingHours + "\t$" + dailyWage
            );
        } else {
            console.log(
                i + "\t" + status + "\t" + "-" + "\t" + "0" + "\t$0"
            );
        }

    }

    console.log("--------------------------------------------------------------");
    console.log(`Total Working Hours: ${totalWorkingHours}`);
    console.log(`Total Wage Earned: $${totalWage}`);

    return { totalWorkingHours, totalWage };
}

function calculateWagesForAYear() {
    let yearlyWage = 0;
    let yearlyWorkingHours = 0;

    console.log("\nCalculating wages for a year (12 months):\n");

    for (let month = 0; month < 12; month++) {
        console.log(`\nMonth: ${monthsOfTheYear[month]}`);
        let { totalWage, totalWorkingHours } = wagesForTwentyDays();

        employeeMonthlyData.push({
            month: monthsOfTheYear[month],
            totalMonthlyWage: totalWage,
            totalWorkingHours: totalWorkingHours
        });

        yearlyWage += totalWage;
        yearlyWorkingHours += totalWorkingHours;
    }

    console.log("\n================================================");
    console.log(`The total wage for the year is $${yearlyWage}.`);
    console.log(`The total working hours for the year is ${yearlyWorkingHours}.`);
    console.log("\nMonthly Data:");
    console.table(employeeMonthlyData);
}

calculateWagesForAYear();
