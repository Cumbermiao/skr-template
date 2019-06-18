"use strict";

var a = function a() {
  var sum = [1, 2, 3, 4, 5].reduce(function (sum, item) {
    return sum + item;
  });
  return sum;
};