// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// s='12:01:00PM'
// Return '12:01:00'.

// s='12:01:00AM'
// Return '00:01:00'.

// Function Description

// Complete the timeConversion function with the following parameter(s):

// string s : a time in 12 hour format

// Returns

// string : the time in 24 hour format
// Input Format

// A single string  that represents a time in  12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

/* steps to solve the problem */
// Step 1: Get AM or PM
// Step 2: Get the Hour
// Step 3: Apply the Rules:
    // If PM and not 12, add 12 to the hour
    // If AM and 12, change hour to 00
// Step 4: Keep Minutes and Seconds the same
// Step 5: Format the Hour to be two digits if necessary
// Step 6: Combine Everything and Return the Result


function timeConversion(s){
    // Step 1: Get AM or PM
    const period=s.slice(-2);
    // Step 2: Get the Hour
    let hour=parseInt(s.slice(0,2));
    // Step 3: Apply the Rules
    if(period === "PM" && hour !==12){
        hour += 12;
    }
    else if(period ==="AM" && hour ===12){
        hour =0;
    }
    
    // Step 4: Keep Minutes and Seconds the same
    const minutesSeconds=s.slice(2,8);
    // Step 5: Format the Hour to be two digits if necessary
    const formattedHour=hour.toString().padStart(2,"0");
    // Step 6: Combine Everything and Return the Result
    return formattedHour + minutesSeconds;
}
const time = "07:05:45PM";
console.log(timeConversion(time)); // Output: 19:05:45

