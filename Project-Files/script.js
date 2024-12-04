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
attendanceChecker();
