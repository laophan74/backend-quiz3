const {check, weight} = require('../main');

for (let i = 1; i < 12; i += 1) {
  test(`kiểm tra xu thật thứ ${i}`, () => {
    expect(check(i, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2])).toStrictEqual('Xu thật');
  });
}
test('kiểm tra xu thật thứ 12', () => {
  expect(check(12, [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual('Xu thật');
});
for (let i = 0; i < 12; i += 1) {
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  arr[i] = 2;
  test(`kiểm tra xu nặng thứ ${i + 1}`, () => {
    expect(check(i + 1, arr)).toStrictEqual([i + 1, true]);
  });
}
for (let i = 0; i < 12; i += 1) {
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  arr[i] = 0;
  test(`kiểm tra xu nhẹ thứ ${i + 1}`, () => {
    expect(check(i + 1, arr)).toStrictEqual([i + 1, false]);
  });
}
test('kiểm tra xu random', () => {
  expect(check(7, [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1])).toStrictEqual([7, false]);
});
test('kiểm tra xu random', () => {
  expect(check(2, [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual([2, true]);
});
test('kiểm tra cân', () => {
  expect(weight(2,1)).toStrictEqual('left is heavier');
});
test('kiểm tra cân', () => {
  expect(weight(0,1)).toStrictEqual('right is heavier');
});
test('kiểm tra cân', () => {
  expect(weight(1,1)).toStrictEqual(false);
});