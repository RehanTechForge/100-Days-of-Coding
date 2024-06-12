var guestList = ["Ali", "Hamza", "Usman"];
var unableToAttend = "Hamza";
console.log("".concat(unableToAttend, " can't make to dinner"));
var newGuest = "Ahmed";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
guestList.unshift("Zain");
guestList.push("Asad");
guestList.splice(guestList.length / 2, 0, "Sami");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
