var userInfo = (function () {
    var name = "rehan";
    var age = 18;
    return {
        displayInfo: function () {
            console.log("The name of user is ".concat(name, " and the age is ").concat(age));
        }
    };
})();
userInfo.displayInfo();
