/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
*/
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let original = x;
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + x % 10; // reversed *10 sẽ là một cột trong một số, từ hàng đơn vị, đến hàng chục,... mỗi lần duyệt qua một lần sẽ là một cột được tăng lên. x%10 là gì trị của cột đó được tách ra. 
    x = Math.floor(x / 10); // làm tròn xuống, bỏ đi một hàng, đơn vị, chục, trăm,..
  }
  return original === reversed;
}

const a = 9876789
const b = 1233421
console.log(isPalindrome(a))
console.log(isPalindrome(b))
