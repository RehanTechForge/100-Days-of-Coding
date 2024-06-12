function averageScore(...score: number[]) {
  return score.reduce((sum, score) => sum + score, 0) / score.length
}
console.log(averageScore(10, 20, 30, 40, 50));
