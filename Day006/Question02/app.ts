const guestList: string[] = ["Ali", "Hamza", "Usman"];

const unableToAttend = "Hamza";
console.log(`${unableToAttend} can't make to dinner`);

const newGuest = "Ahmed";

guestList[guestList.indexOf(unableToAttend)] = newGuest;

guestList.unshift("Zain");
guestList.push("Asad");
guestList.splice(guestList.length / 2, 0, "Sami");

console.log(`Unfortunatly, I only invite two poeple for dinner`);

while (guestList.length > 2) {
  const guest = guestList.pop();
  console.log(`${guest} can't make to dinner`);
}

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner`);
});