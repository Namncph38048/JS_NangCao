// Log number
console.log(2);

// Log string
console.log('Xin chào');

// Log multiple values
console.log(17, 'Thái Bình xin chào', true);

// Log a variable
const a = 19;
console.log(a);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Nam', email: 'namncph38048@gmail.com' });

// Group console commands
console.group('FA');
console.log(a);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cXin chào', styles);