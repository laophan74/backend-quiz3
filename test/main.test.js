const check = require('../main');

for (let i = 1; i < 12; i += 1) {
  test(`kiểm tra xu thứ ${i}`, () => {
    expect(check(i, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2])).toStrictEqual('Xu thật');
  });
}
test('kiểm tra xu thứ 12', () => {
  expect(check(12, [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual('Xu thật');
});
test('kiểm tra xu random', () => {
  expect(check(7, [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1])).toStrictEqual([7, false]);
});
