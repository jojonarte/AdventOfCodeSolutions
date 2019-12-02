/**
 * solution for problem https://adventofcode.com/2019/day/1
 */

const INPUT = [
  70904,
  66770,
  11867,
  58460,
  12856,
  60820,
  10715,
  11319,
  52413,
  11833,
  96711,
  88120,
  12974,
  64049,
  90586,
  54466,
  55693,
  10240,
  14827,
  11028,
  11181,
  60951,
  10287,
  13525,
  13008,
  86645,
  72934,
  14709,
  74578,
  12407,
  10000,
  10331,
  86468,
  84557,
  94232,
  12001,
  64372,
  14308,
  96664,
  14807,
  14735,
  13989,
  11313,
  14302,
  14429,
  81293,
  53679,
  13931,
  10715,
  12173,
  13251,
  13266,
  80464,
  11111,
  76734,
  13902,
  11128,
  12681,
  13053,
  12917,
  67549,
  10205,
  72673,
  91194,
  64753,
  59488,
  12630,
  94407,
  12681,
  60028,
  95129,
  79270,
  12346,
  60966,
  11192,
  76549,
  11019,
  11997,
  11255,
  12967,
  10494,
  89583,
  12189,
  10890,
  13524,
  75129,
  14864,
  13112,
  78931,
  11163,
  72752,
  14076,
  57387,
  85684,
  77596,
  13415,
  63031,
  14836,
  13385,
  82022,
];

function getFuel(input) {
  return Math.floor(input / 3) - 2;
}

function getTotalFuel(input) {
	if (getFuel(input) <= 0) {
    	return 0;
	}

	return getFuel(input) + getTotalFuel(getFuel(input)); 
}

/**
 * solution for part 1
 */
function part1Solution(inputArray) {
  return inputArray.reduce(function (acc, next) {
    return acc + getFuel(next);
  }, 0);
}

/**
 * solution for part 2
 */
function part2Solution(inputArray) {
  return inputArray.reduce(function (acc, next) {
    return acc + getTotalFuel(next);
  }, 0);
}


console.log('part 1 answer: ', part1Solution(INPUT));
console.log('part 2 answer: ', part2Solution(INPUT));