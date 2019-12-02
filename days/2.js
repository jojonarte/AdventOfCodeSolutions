const INPUT = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,19,5,23,2,9,23,27,1,5,27,31,1,5,31,35,1,35,13,39,1,39,9,43,1,5,43,47,1,47,6,51,1,51,13,55,1,55,9,59,1,59,13,63,2,63,13,67,1,67,10,71,1,71,6,75,2,10,75,79,2,10,79,83,1,5,83,87,2,6,87,91,1,91,6,95,1,95,13,99,2,99,13,103,1,103,9,107,1,10,107,111,2,111,13,115,1,10,115,119,1,10,119,123,2,13,123,127,2,6,127,131,1,13,131,135,1,135,2,139,1,139,6,0,99,2,0,14,0];

const MODIFIED_INPUT_FOR_PART1 = [...INPUT];
MODIFIED_INPUT_FOR_PART1[1] = 12;
MODIFIED_INPUT_FOR_PART1[2] = 2;

const opts = {
  1: (inputArray, pos1, pos2, resultPos) => inputArray[inputArray[resultPos]] = inputArray[inputArray[pos1]] + inputArray[inputArray[pos2]],
  2: (inputArray, pos1, pos2, resultPos) => inputArray[inputArray[resultPos]] = inputArray[inputArray[pos1]] * inputArray[inputArray[pos2]],
};

const part1Solution = (inputArray, index = 0) => {
  const operation = inputArray[index];
  if (operation === 99) {
    return inputArray[0];
  }

  if (operation === 1 || operation === 2) {
	operations[operation](inputArray, index + 1, index + 2, index + 3)
  } else {
   	throw new Error('Something went wrong!');
  }

  return part1Solution(inputArray, index + 4);
};

console.log('solution 1: ', part1Solution(MODIFIED_INPUT_FOR_PART1));