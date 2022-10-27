# Những function đáng chú ý mà em đã xem

## _.chunk

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

## _.compact

* *Cú pháp:* `_.compact(array)`  

* *Tác dụng:* Tạo ra một mảng mới mà không có các giá trị falsy bên trong.  

>falsy gồm: undefined, null, NaN, 0, "" (empty string), false

* *So sánh với built-in function:* built-in function không có function này.

* *Ví dụ:*  

```javascript
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

## _.difference

* *Cú pháp:* `_.difference(array, [values])`  

* *Tác dụng:* Tạo ra một mảng mới chứa các phần tử của 'array' không giống với các phần tử trong 'values'.  

* *So sánh với built-in function:* built-in function không có function này.  

* *Ví dụ:*  

```javascript
_.difference([2, 1, 3], [2, 3, 4]);
// => [1] 
```

## _.drop

* *Cú pháp:* `_.drop(array, [n=1])`  

* *Tác dụng:* Xoá số phần tử = n từ trái sang, nếu không set thì n mặc định = 1.  

* *So sánh với built-in function:* hàm splice() trong javascript chỉ xoá 1 phần tử được chỉ định.  

* *Ví dụ:*  

```javascript
_.drop([1, 2, 3], 2);
// => [3]  
_.drop([1, 2, 3], 5);
// => []  
```  

## _.sum

* *Cú pháp:* `_.sum(array)`  

* *Tác dụng:* Tính tổng tất cả phần tử trong mảng.  

* *So sánh với built-in function:* Phải chạy vòng lặp for mới tính tổng được tất cả phần tử, nhưng nếu sử dụng vòng lặp thì có thể tính tổng các phần tử mình muốn.  

* *Ví dụ:*  

```javascript
_.sum([4, 2, 8, 6]);
// => 20
```  

## _.max

* *Cú pháp:* `_.max(array)`  

* *Tác dụng:* Tìm phần tử lớn nhất trong mảng.  

* *So sánh với built-in function:* Phải chạy vòng lặp for mới tìm được phần tử lớn nhất.  

* *Ví dụ:*  

```javascript
_.max([4, 2, 8, 6]);
// => 8
```  

## _.join

* *Cú pháp:* `_.join(array, [separator=','])`  

* *Tác dụng:* Ghép các phần tử trong mảng lại thành 1 chuỗi cách nhau bởi 'separator'.  

* *So sánh với built-in function:* Giống với Array.prototype.join().  

* *Ví dụ:*  

```javascript
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```  

## _.pull

* *Cú pháp:* `_.pull(array, [values])`  

* *Tác dụng:* Xoá tất cả phần tử giống với 'value' ra khỏi mảng.  

* *So sánh với built-in function:* Không có function này.  

* *Ví dụ:*  

```javascript
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```  