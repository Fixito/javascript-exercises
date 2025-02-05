const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return 'ERROR';
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
