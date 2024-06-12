let userName: string[] = [];
// "Rehan", "admin", "Usman", "asghar"

if (userName.length !== 0) {
  userName.forEach((user) => {
    if (user.toLowerCase() === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  })
} else {
  console.log("We need to find some users!")
}