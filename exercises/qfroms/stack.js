const Stack = function () {
  var data = [];
  return {
    push: (record) => {
      data.push(record);
    },
    pop: () => {
      return data.pop();
    },
    peek: () => {
      return data[data.length - 1];
    }
  }
};

export default Stack;
