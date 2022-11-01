/* eslint-disable no-console */
const _ = require('lodash');
const Scale = require('./Scale');

// const randomFakeCoin = Math.random() < 0.5 ? 0 : 2;
// const randomCoin = _.shuffle([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, randomFakeCoin, 1]);

function check(index, randomCoin) {
  const coin = new Scale(randomCoin);
  // Chia ra 3 phần
  const part1 = [coin.coin[0], coin.coin[1], coin.coin[2], coin.coin[3]];
  const part2 = [coin.coin[4], coin.coin[5], coin.coin[6], coin.coin[7]];
  const part3 = [coin.coin[8], coin.coin[9], coin.coin[10], coin.coin[11]];
  let result = [];
  // NOTE - Case 1: 2 phần đầu bằng nhau
  if (coin.weight(_.sum(part1), _.sum(part2)) === false) {
    // Lấy 3 xu trong phần 3(phần có xu bị lỗi) so sánh với 3 xu trong phần 1(phần không lỗi)
    const part11 = [part1[0], part1[1], part1[2]];
    const part31 = [part3[0], part3[1], part3[2]];
    const part32 = part3[3];
    // Nếu 2 phần đó bằng nhau thì xu còn lại lỗi
    if (coin.weight(_.sum(part31), _.sum(part11)) === false) {
      if (coin.weight(part32, part3[0]) === 'left is heavier') result = coin.isHeavier(12, true);
      else result = coin.isHeavier(12, false);
    }
    // Nếu phần bên trái nặng hơn thì lấy 2 xu ra cân, xu nặng hơn là xu lỗi
    if (coin.weight(_.sum(part31), _.sum(part11)) === 'left is heavier') {
      if (coin.weight(part31[0], part31[1]) === false) result = coin.isHeavier(11, true);
      if (coin.weight(part31[0], part31[1]) === 'left is heavier') result = coin.isHeavier(9, true);
      if (coin.weight(part31[0], part31[1]) === 'right is heavier') result = coin.isHeavier(10, true);
    }
    // Nếu phần bên phải nặng hơn thì lấy 2 xu ra cân, xu nhẹ hơn là xu lỗi
    if (coin.weight(_.sum(part31), _.sum(part11)) === 'right is heavier') {
      if (coin.weight(part31[0], part31[1]) === false) result = coin.isHeavier(3 + 4 + 4, false);
      if (coin.weight(part31[0], part31[1]) === 'left is heavier') result = coin.isHeavier(10, false);
      if (coin.weight(part31[0], part31[1]) === 'right is heavier') result = coin.isHeavier(9, false);
    }
  }

  // NOTE - Case 2: Phần đầu nặng hơn phần thứ 2
  if (coin.weight(_.sum(part1), _.sum(part2)) === 'left is heavier') {
    // Chia ra 2 phần: 1, 5, 6 - 2, 7, 8(còn lại 3, 4)
    const partX = [part1[0], part2[0], part2[1]];
    const partY = [part1[1], part2[2], part2[3]];
    // Nếu 2 phần bằng nhau, so sánh 3, 4, vì cả 3, 4 nằm ở phần nặng hơn nên cái nào nặng hơn thì đó là xu lỗi
    if (coin.weight(partX, partY) === false) {
      if (coin.weight(part1[2], part1[3]) === 'left is heavier') result = coin.isHeavier(3, true);
      if (coin.weight(part1[2], part1[3]) === 'right is heavier') result = coin.isHeavier(4, true);
    }
    // Nếu bên trái nặng hơn, hoặc xu 1 nặng hơn, hoặc xu 7, 8 nhẹ hơn
    if (coin.weight(partX, partY) === 'left is heavier') {
      if (coin.weight(part2[2], part2[3]) === false) result = coin.isHeavier(1, true);
      if (coin.weight(part2[2], part2[3]) === 'left is heavier') result = coin.isHeavier(8, false);
      if (coin.weight(part2[2], part2[3]) === 'right is heavier') result = coin.isHeavier(7, false);
    }
    // Nếu bên phải nặng hơn, hoặc xu 2 nặng hơn, hoặc xu 5, 6 nhẹ hơn
    if (coin.weight(partX, partY) === 'right is heavier') {
      if (coin.weight(part2[0], part2[1]) === false) result = coin.isHeavier(2, true);
      if (coin.weight(part2[0], part2[1]) === 'left is heavier') result = coin.isHeavier(6, false);
      if (coin.weight(part2[0], part2[1]) === 'right is heavier') result = coin.isHeavier(5, false);
    }
  }
  // NOTE - Case 3: Phần đầu nhẹ hơn phần thứ 2 thì ngược lại so với case 2
  if (coin.weight(_.sum(part1), _.sum(part2)) === 'right is heavier') {
    const partX = [part1[0], part2[0], part2[1]];
    const partY = [part1[1], part2[2], part2[3]];
    if (coin.weight(partX, partY) === false) {
      if (coin.weight(part1[2], part1[3]) === 'left is heavier') result = coin.isHeavier(4, false);
      if (coin.weight(part1[2], part1[3]) === 'right is heavier') result = coin.isHeavier(3, false);
    }
    if (coin.weight(partX, partY) === 'left is heavier') {
      if (coin.weight(part2[0], part2[1]) === false) result = coin.isHeavier(2, false);
      if (coin.weight(part2[0], part2[1]) === 'left is heavier') result = coin.isHeavier(5, true);
      if (coin.weight(part2[0], part2[1]) === 'right is heavier') result = coin.isHeavier(6, true);
    }
    if (coin.weight(partX, partY) === 'right is heavier') {
      if (coin.weight(part2[2], part2[3]) === false) result = coin.isHeavier(1, false);
      if (coin.weight(part2[2], part2[3]) === 'left is heavier') result = coin.isHeavier(7, true);
      if (coin.weight(part2[2], part2[3]) === 'right is heavier') result = coin.isHeavier(8, true);
    }
  }
  console.log(coin.coin);
  console.log('Kết quả đúng: ', result);
  if (index === result[0]) {
    return result;
  }
  return 'Xu thật';
}
console.log(check(12, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]));
// check();
module.exports = check;
