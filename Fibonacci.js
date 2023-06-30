function fbnc(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
}

var n = prompt("Please Enter the value of n for the Fibonacci Sequence: ");

var result = fbnc(n);

document.write("<h1>The Result</h1>");
document.write("<h2>Fibonacci Sequence:</h2>");
document.write("<p>");
for (var i = 0; i < result.length; i++) {
  document.write(result[i] + " ");
}
document.write("</p>");
