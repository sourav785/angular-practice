//let message = 'abc';
let message;
message = 'abc';

//let endsWithC = message.endsWith('c');
let anotherWay = (<string> message).endsWith('a');
let alternativeWay = (message as string).endsWith('a');

console.log(anotherWay);
console.log(alternativeWay);