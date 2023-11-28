function splitIntoArray(input) {
	const numberString = input.toString();
	const numberPairs = [];

	for (let i = 0; i < numberString.length - 1; i++) {
		for (let j = i + 2; j <= numberString.length; j++) {
			const pair = numberString.slice(i, j);
			numberPairs.push(pair);
		}
	}

	return numberPairs;
}

const input =
	"2463500772382453117509306958413167458330158541102366039292366438664837411356082863163163389919881038236911053611057326383153267559682117213988200612145608683";

const result = splitIntoArray(input);

console.log(result);

function findMostRepeatedPair(numberPairs) {
	const pairCounts = new Map();

	for (const pair of numberPairs) {
		pairCounts.set(pair, (pairCounts.get(pair) || 0) + 1);
	}

	let mostRepeated = null;
	let highestCount = 0;

	pairCounts.forEach((count, pair) => {
		if (count > highestCount) {
			mostRepeated = pair;
			highestCount = count;
		}
	});

	return { mostRepeated, highestCount };
}

const resultInfo = findMostRepeatedPair(result);

console.log(`Most repeated pair: ${resultInfo.mostRepeated}`);
console.log(`Count: ${resultInfo.highestCount}`);
