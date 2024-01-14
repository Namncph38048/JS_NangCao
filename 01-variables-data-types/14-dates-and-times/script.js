let d;

// Lấy ngày & giờ hôm nay
d = new Date();

// tạo chuỗi
d = d.toString();

// Lấy ngày cụ thể
// Bắt đầu từ 0 nên 0 là tháng 1 và 11 là tháng 12
d = new Date(2021, 0, 10, 12, 30, 0);

// Truyền vào 1 chuỗi
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// Lấy dấu time hiện tại
d = Date.now();

// Lấy dấu time của 1 ngày cụ thể
d = new Date();
d = d.getTime();
d = d.valueOf();

// Tạo ngày từ dấu time
d = new Date(1666962049745);

// Chuyển từ ms sang s
d = Math.floor(Date.now() / 1000);

console.log(d);
