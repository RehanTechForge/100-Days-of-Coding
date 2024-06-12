let currentUser: string[] = ["rehan", "usman", "asghar", "arshad", "bilal"];
let newUser: string[] = ["talha", "taha", "Asghar", "Arshad", "Bilal"];

newUser.forEach((user) => {
  if (currentUser.some(currentUser => currentUser.toLowerCase() === user.toLowerCase())) {
    console.log("enter a new username.");
  } else {
    console.log("username is available.");
  }
})