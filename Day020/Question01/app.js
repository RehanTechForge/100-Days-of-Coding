function averageScore() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    return score.reduce(function (sum, score) { return sum + score; }, 0) / score.length;
}
console.log(averageScore(10, 20, 30, 40, 50));
