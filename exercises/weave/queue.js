const Queue = () => {
  const data = [];
  return {
    add: (element) => {
      data.unshift(element);
    },
    remove: () => {
      return data.pop();
    },
    peek: () => {
      return data[data.length - 1];
    }
  }
};

export default Queue;
