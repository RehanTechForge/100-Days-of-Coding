const guestList: string[] = ["Ali", "Hamza", "Usman"];

const unableToAttend = "Hamza";
console.log(`${unableToAttend} can't make to dinner`);

const newGuest = "Ahmed";

guestList[guestList.indexOf(unableToAttend)] = newGuest;


for (let i = 0; i < guestList.length; i++) {
  console.log(`Hi ${guestList[i]}, I would like to invite you to dinner.`);
}