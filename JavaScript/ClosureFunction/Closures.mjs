// It's a concept where the inner function can access the variable of outer function:
const outer = () => {
  var count = 0;

  return {
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
    getCount: () => {
      return count;
    },
  };
};

const getCount = outer();
getCount.increment();
getCount.increment();

console.log(getCount.getCount());
