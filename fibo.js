function fibo(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibo(n - 2) + fibo(n - 1);
}

// memoised fibo 
function fibom(n) {
  return fibom_impl(n, new Map());
}

function fibom_impl(n, memo) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  if (!memo.has(n)) {
    memo.set(n, fibom_impl(n - 2, memo) + fibom_impl(n - 1, memo));
  }
  return memo.get(n);
}

export { fibo, fibom };