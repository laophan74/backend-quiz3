/* eslint-disable class-methods-use-this */
class Scale {
  constructor(coin) {
    this.coin = coin;
  }

  weight(left, right) {
    if (left > right) return 'left is heavier';
    if (left < right) return 'right is heavier';
    return false;
  }

  isHeavier(index, isHeavier) {
    console.log('Fake coin: ', index, ', isHeavier: ', isHeavier);
  }
}

module.exports = Scale;
