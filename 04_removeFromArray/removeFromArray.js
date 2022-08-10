const removeFromArray = function (arr, ...remove) {
  return arr.filter((item) => {
    if (!remove.includes(item)) return item;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
