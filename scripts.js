// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

const first = data.lists[0][1] || {};
const second = data.lists[1][1] || {};
const third = data.lists[2][1] || {};

const result = [];

const extractBiggest = () => {
  const firstL = first.length > 0 ? first[first.length - 1] : 0;
  const secondL = second.length > 0 ? second[second.length - 1] : 0;
  const thirdL = third.length > 0 ? third[third.length - 1] : 0;

  if (firstL >= secondL && firstL >= thirdL && first.length > 0) {
    return first.pop();
  } else if (secondL >= thirdL && second.length > 0) {
    return second.pop();
  } else {
    return third.pop();
  }
};

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
