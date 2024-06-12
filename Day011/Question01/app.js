var userName = [];
// "Rehan", "admin", "Usman", "asghar"
if (userName.length !== 0) {
    userName.forEach(function (user) {
        if (user.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    });
}
else {
    console.log("We need to find some users!");
}
