var guestList = ["Ali", "Hamza", "Usman"];
var unableToAttend = "Hamza";
console.log("".concat(unableToAttend, " can't make to dinner"));
var newGuest = "Ahmed";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", I would like to invite you to dinner."));
}
