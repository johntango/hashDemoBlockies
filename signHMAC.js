// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log('token:');
console.log(token);



// verify a token symmetric - synchronous
var decoded = jwt.verify(token, 'shhhhh');
console.log('--------------');
console.log('decoded.foo:'); // bar
console.log(decoded.foo); // bar
console.log('--------------');
console.log('decoded:'); // bar
console.log(decoded);
console.log('--------------');


// verify a token symmetric - asynchronous
jwt.verify(token, 'shhhhh', function(err, decoded) {
  console.log('--------------');  
  console.log('decoded.foo:'); // bar
  console.log(decoded.foo); // bar
  console.log('--------------');  
});


// without verification
decoded = jwt.decode(token, {complete: true});
console.log('decoded.header:');  
console.log(decoded.header);
console.log('decoded.payload:');  
console.log(decoded.payload);

