var currentUser = ["rehan", "usman", "asghar", "arshad", "bilal"];
var newUser = ["talha", "taha", "Asghar", "Arshad", "Bilal"];
newUser.forEach(function (user) {
    if (currentUser.some(function (currentUser) { return currentUser.toLowerCase() === user.toLowerCase(); })) {
        console.log("enter a new username.");
    }
    else {
        console.log("username is available.");
    }
});
