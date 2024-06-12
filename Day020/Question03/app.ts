let userInfo = (function () {
  let name = "rehan";
  let age = 18;

  return {
    displayInfo: function () {
      console.log(`The name of user is ${name} and the age is ${age}`);
    }
  }
})()
userInfo.displayInfo();