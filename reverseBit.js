var reverseBits = (n) => {
  var rev = 0;
  if (n == 0) return 0;
  for (var i = 0; i < 32; i++) {
    rev <<= 1;
    if (n & 1 == 1) {
      rev^=1;
    }
    n >>= 1;
  }
  return rev;
}

console.log(reverseBits(-3));

var reverseBits = function(n) {
  var result =  0;
  
  for(var i = 0; i < 31; i++){
      result <<= 1;
      result |= n & 1;

      n >>>= 1;
      // console.log(result, n);
  }
  
  return Math.abs(result);
};

console.log(reverseBits(-5));
// var a = 0;
// a++;
// a <<= 1;
// a <<= 1;
// for (var i = 0; i < 29; i++) {
//   a++;
//   a <<= 1;
//   console.log(a);
// }