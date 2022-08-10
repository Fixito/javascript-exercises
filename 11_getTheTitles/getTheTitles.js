const getTheTitles = function (arr) {
  return arr.reduce((acc, current, i) => {
    acc[i] = current.title;
    return acc;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
