var guestList = ["Ali", "Hamza", "Usman"];
var unableToAttend = "Hamza";
console.log("".concat(unableToAttend, " can't make to dinner"));
var newGuest = "Ahmed";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
guestList.unshift("Zain");
guestList.push("Asad");
guestList.splice(guestList.length / 2, 0, "Sami");
console.log("Unfortunatly, I only invite two poeple for dinner");
while (guestList.length > 2) {
    var guest = guestList.pop();
    console.log("".concat(guest, " can't make to dinner"));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner"));
});
guestList.splice(0, guestList.length);
console.log(guestList);
