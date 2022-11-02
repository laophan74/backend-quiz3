# Những function đáng chú ý mà em đã xem

## Array

### _.chunk

* *Cú pháp:* `_.chunk(array, [size=1])`  

* *Tác dụng:* Cắt mảng thành các mảng con có số phần tử bằng 'size', nếu mảng không chia hết thì số phần tử còn lại nằm vào mảng cuối cùng.  

* *So sánh với built-in function:* built-in function không có function này.  

* *Ví dụ:*  

```javascript
_.chunk(['a', 'b', 'c', 'd'], 2); 
// => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']] 
```

### _.compact

* *Cú pháp:* `_.compact(array)`  

* *Tác dụng:* Tạo ra một mảng mới mà không có các giá trị falsy bên trong.  

>falsy gồm: undefined, null, NaN, 0, "" (empty string), false

* *So sánh với built-in function:* built-in function không có function này.

* *Ví dụ:*  

```javascript
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

### _.difference

* *Cú pháp:* `_.difference(array, [values])`  

* *Tác dụng:* Tạo ra một mảng mới chứa các phần tử của 'array' không giống với các phần tử trong 'values'.  

* *So sánh với built-in function:* built-in function không có function này.  

* *Ví dụ:*  

```javascript
_.difference([2, 1, 3], [2, 3, 4]);
// => [1] 
```

### _.drop

* *Cú pháp:* `_.drop(array, [n=1])`  

* *Tác dụng:* Xoá số phần tử = n từ trái sang, nếu không set thì n mặc định = 1.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.drop([1, 2, 3], 2);
// => [3]  
_.drop([1, 2, 3], 5);
// => []  
```  

### _.sum

* *Cú pháp:* `_.sum(array)`  

* *Tác dụng:* Tính tổng tất cả phần tử trong mảng.  

* *So sánh với built-in function:* Phải chạy vòng lặp for mới tính tổng được tất cả phần tử, nhưng nếu sử dụng vòng lặp thì có thể tính tổng các phần tử mình muốn.  

* *Ví dụ:*  

```javascript
_.sum([4, 2, 8, 6]);
// => 20
```  

### _.max

* *Cú pháp:* `_.max(array)`  

* *Tác dụng:* Tìm phần tử lớn nhất trong mảng.  

* *So sánh với built-in function:* Phải chạy vòng lặp for mới tìm được phần tử lớn nhất.  

* *Ví dụ:*  

```javascript
_.max([4, 2, 8, 6]);
// => 8
```  

### _.join

* *Cú pháp:* `_.join(array, [separator=','])`  

* *Tác dụng:* Ghép các phần tử trong mảng lại thành 1 chuỗi cách nhau bởi 'separator'.  

* *So sánh với built-in function:* Giống với Array.prototype.join().  

* *Ví dụ:*  

```javascript
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```  

### _.pull

* *Cú pháp:* `_.pull(array, [values])`  

* *Tác dụng:* Xoá tất cả phần tử giống với 'value' ra khỏi mảng, thay đổi luôn giá trị gốc của mảng đó.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```  

### _.without

* *Cú pháp:* `_.without(array, [values])`  

* *Tác dụng:* Xoá tất cả phần tử giống với 'value' ra khỏi mảng, trả về một mảng mới chứ không tác động đến mảng gốc.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```  

### _.concat

* *Cú pháp:* `_.concat(array, [values])`  

* *Tác dụng:* Gộp mảng lại với nhau.  

* *So sánh với built-in function:* Giống với Array.prototype.concat().  

* *Ví dụ:*  

```javascript
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
```  

### _.findIndex

* *Cú pháp:* `_.findIndex(array, [predicate=_.identity], [fromIndex=0])`  

* *Tác dụng:* Tìm số thứ tự của phần tử đầu tiên giống với điều kiện, nếu không có phần tử đó sẽ trả về -1.  

* *So sánh với built-in function:* Giống với Array.prototype.findIndex().  

* *Ví dụ:*  

```javascript
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```  

### _.head

* *Cú pháp:* `_.head(array)`  

* *Tác dụng:* Tìm phần tử đầu tiên của mảng.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
```  

### _.last

* *Cú pháp:* `_.last(array)`  

* *Tác dụng:* Tìm phần tử cuối cùng của mảng.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.last([1, 2, 3]);
// => 3
 
_.last([]);
// => undefined
```  

### _.initial

* *Cú pháp:* `_.initial(array)`  

* *Tác dụng:* Lấy các phần tử của mảng trừ phần tử cuối cùng.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.initial([1, 2, 3]);
// => [1, 2]
```  

### _.tail

* *Cú pháp:* `_.tail(array)`  

* *Tác dụng:* Lấy các phần tử của mảng trừ phần tử đầu tiên.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.initial([1, 2, 3]);
// => [2, 3]
```  

### _.indexOf

* *Cú pháp:* `_.indexOf(array, value, [fromIndex=0])`  

* *Tác dụng:* Tìm số thứ tự của phần tử đầu tiên ứng với 'value', bắt đầu từ 'fromIndex', nếu khống có sẽ trả về -1.  

* *So sánh với built-in function:* Giống với Array.prototype.indexOf().  

* *Ví dụ:*  

```javascript
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```  

### _.lastIndexOf

* *Cú pháp:* `_.lastIndexOf(array, value, [fromIndex=array.length-1])`  

* *Tác dụng:* Tìm số thứ tự của phần tử cuối cùng ứng với 'value', bắt đầu từ 'fromIndex', nếu khống có sẽ trả về -1.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```  

### _.remove

* *Cú pháp:* `_.remove(array, [predicate=_.identity])`  

* *Tác dụng:* Xoá mọi phần tử giống với điều kiện, so với _.pull thì _.remove có thể custom điều kiện dễ dàng hơn.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```  

### _.reverse

* *Cú pháp:* `_.reverse(array)`  

* *Tác dụng:* Đảo ngược thứ tự các phần tử trong mảng.  

* *So sánh với built-in function:* Giống với Array.prototype.reverse().  

* *Ví dụ:*  

```javascript
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
```  

### _.slice

* *Cú pháp:* `_.slice(array, [start=0], [end=array.length]))`  

* *Tác dụng:* Cắt ra 1 mảng bằng các phần tử từ 'start' đến 'end', nếu 'start' là số âm thì đếm ngược lại, 'end' được mặc định là phần tử cuối cùng.  

* *So sánh với built-in function:* Giống với Array.prototype.slice().  

* *Ví dụ:*  

```javascript
var array = [1, 2, 3, 4];
 
_.slice(array, 1);
// => [2,3,4]
```  

### _.take

* *Cú pháp:* `_.take(array, [n=1])`  

* *Tác dụng:* Tạo ra 1 mảng có số phần tử bằng 'n' tính từ trái qua.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
```  

### _.takeRight

* *Cú pháp:* `_.takeRight(array, [n=1])`  

* *Tác dụng:* Tạo ra 1 mảng có số phần tử bằng 'n' tính từ phải qua, 'n' mặc định bằng 1.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.takeRight([1, 2, 3]);
// => [3]
 
_.takeRight([1, 2, 3], 2);
// => [2, 3]
 
_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
 
_.takeRight([1, 2, 3], 0);
// => []
```  

### _.uniq

* *Cú pháp:* `_.uniq(array)`  

* *Tác dụng:* Tạo ra 1 mảng có các phần tử không giống nhau, nếu có các phần tử giống nhau thì giữ lại phần tử xuất hiện đầu tiên.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.uniq([2, 1, 2, 1, 1, 1, 2]);

// => [2, 1]
```  

### _.intersection

* *Cú pháp:* `_.intersection([arrays]))`  

* *Tác dụng:* Tìm các phần tử giống nhau giữa các mảng.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.intersection([2, 1, 4, 2], [4, 2, 3], [4, 2, 3]);
// => [2]
```  

### _.xor

* *Cú pháp:* `_.xor([arrays])`  

* *Tác dụng:* Tìm các phần tử khác nhau giữa các mảng.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
_.xor([2, 1, 4, 5], [2, 3, 4], [2, 3]);
// => [1, 3]
```  

## Collection  

### _.forEach

* *Cú pháp:* `_.forEach(collection, [iteratee=_.identity])`  

* *Tác dụng:* Duyệt từng phần tử từ trái sang phải và xử lí thuật toán, phù hợp với mảng.  

* *So sánh với built-in function:* Giống với Map.prototype.forEach().  

* *Ví dụ:*  

```javascript
_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.
 
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```  

### _.find

* *Cú pháp:* `_.find(collection, [predicate=_.identity], [fromIndex=0])`  

* *Tác dụng:* Trả về phần tử theo điều kiện, nhưng chỉ trả về phần tử đầu tiên phù hợp với điều kiện.  

* *So sánh với built-in function:* Array.prototype.find() chỉ dùng được đối với mảng, không có hàm find dành cho Object.  

* *Ví dụ:*  

```javascript
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
 
// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'
 
// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'
```  

### _.filter

* *Cú pháp:* `_.filter(collection, [predicate=_.identity])`  

* *Tác dụng:* Trả về mảng chứa các phần tử theo điều kiện, nhưng trả về tất cả phần tử phù hợp với điều kiện.  

* *So sánh với built-in function:* Giống với Array.prototype.filter().  

* *Ví dụ:*  

```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
_.filter(users, function(o) { return o.age < 50; });
// => objects for ['fred'] and ['barney']
 
// The `_.matches` iteratee shorthand.
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']
 
// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
```  

### _.reject

* *Cú pháp:* `_.reject(collection, [predicate=_.identity])`  

* *Tác dụng:* Function này ngược lại hoàn toàn so với filter, trả về mảng chứa các phần tử không giống với điều kiện.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
 
_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']
 
// The `_.matches` iteratee shorthand.
_.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.reject(users, ['active', false]);
// => objects for ['fred']
 
// The `_.property` iteratee shorthand.
_.reject(users, 'active');
// => objects for ['barney']
```  

### _.map

* *Cú pháp:* `_.map(collection, [iteratee=_.identity])`  

* *Tác dụng:* Tạo một mảng giá trị bằng cách chạy từng phần tử trong collection, mảng trả về dựa vào điều kiện.  

* *So sánh với built-in function:* Array.prototype.map() không thể xử lý nhiều điều kiện trong 1 function.  

* *Ví dụ:*  

```javascript
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
_.map(users, function(o) { return o.age; });
// => [36, 40, 1]

```  

### _.orderBy

* *Cú pháp:* `_.orderBy(collection, [iteratees=[_.identity]], [orders])`  

* *Tác dụng:* Sắp xếp các phần tử được chỉ định, có thể sắp xếp lớn bé đều được còn sortBy thì không.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// Sort by `user` in ascending order and by `age` in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```  

## Object

### _.forIn

* *Cú pháp:* `_.forIn(object, [iteratee=_.identity])`  

* *Tác dụng:* Duyệt từng phần tử từ trái sang phải và xử lí thuật toán, phù hợp với Object.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
var users = {
  name: 'Hoang',
  age: 35,
  gender: 'male'
}
_.forInt(users, (value, key) => {
    console.log(value)
  })
// => 'Hoang', '35', 'male'
```  
