const guestList: string[] = ["Ali", "Hamza", "Usman"];

const unableToAttend = "Hamza";
console.log(`${unableToAttend} can't make to dinner`);

const newGuest = "Ahmed";

guestList[guestList.indexOf(unableToAttend)] = newGuest;

guestList.unshift("Zain");
guestList.push("Asad");
guestList.splice(guestList.length / 2, 0, "Sami");

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});