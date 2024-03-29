let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];


// Lồng các mảng

// Lồng các mảng vào bên trong mảng
fruits.push(berries);

// Now we can access 'blueberry' with the following
x = fruits[3][1];

// Tạo một biến mới và lồng cả hai mảng
const allFruits = [fruits, berries];

x = allFruits[1][2];

// Nối mảng
x = fruits.concat(berries);

// toán tử trải rộng (...) - Nối với
x = [...fruits, ...berries];

// Làm phẳng một mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Các phương thức tĩnh của đối tượng Array

// Kiểm tra xem đây có phải là một mảng
x = Array.isArray(fruits);

// from() - Tạo một mảng từ một mảng như giá trị
x = Array.from('12345');

// of() - Tạo một mảng từ một tập hợp các giá trị
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
