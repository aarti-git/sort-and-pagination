for (var i = 1; i <= 5; i++) {
  const fn = (function (n) {
    return function () {
      fun(n);
    };
  })(i);
  setTimeout(fn);
}
