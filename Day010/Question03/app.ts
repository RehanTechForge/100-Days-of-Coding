let userName: string[] = ["Rehan", "admin", "Usman", "asghar"];

userName.forEach((user) => {
  if (user.toLowerCase() === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
})