const throttle = (callback, time) => {
  let lastThrottleCall = 0;

  return (...args) => {
    if (Date.now() - lastThrottleCall > time) {
      callback(...args);
      lastThrottleCall = Date.now();
    }
  };
};

const throttleLogger = throttle((value) => console.log(value), 1000);
throttleLogger('1');
throttleLogger("That won't work");
setTimeout(throttleLogger, 1000, 'That should work');
