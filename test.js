var on = function (element, event, handler) {
  if (document.addEventListener) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  } else {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler);
    }
  }
}

var on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

//换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
var on = function (isSupport, element, event, handler) {
  isSupport = isSupport || document.addEventListener;
  if (isSupport) {
    return element.addEventListener(event, handler, false);
  } else {
    return element.attachEvent('on' + event, handler);
  }
}