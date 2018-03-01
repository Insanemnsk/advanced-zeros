module.exports = function getZerosCount(number, base) {
  let primeAndItsPow = [];

  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let pow = 0;
      while (base % i === 0) {
        base /= i;
        pow++;
      }
      primeAndItsPow.push([i, pow]);
    }
  }

  function getZerosAmount(prime, pow) {
    let count = 0;
    let primeTimes = prime;
    while (primeTimes < number) {
      count += Math.floor(number / primeTimes);
      primeTimes *= prime;
    }
    return Math.floor(count / pow);
  }

  return Math.min(...primeAndItsPow.map(pair => getZerosAmount(...pair)));
};