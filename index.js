const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortAsc(input) {
    return input.sort((a, b) => a - b);
}

function sortDesc(input) {
    return input.sort((a, b) => b - a);
}

function sortWordsABC(input) {
    return input.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

function sortWordsByLength(input) {
    return input.sort((a, b) => a.length - b.length);
}

function getUniqueWords(input) {
    return Array.from(new Set(input));
}

function getUnique(input) {
    return input.filter((value, index) => input.indexOf(value) === index && input.lastIndexOf(value) === index);
}

function processInp() {
    rl.question('Enter a words or numbers separated by a space: ', (inputStr) => {
        const input = inputStr.trim().split(' ');

        rl.question('Choose an operation: \n' +
            '1. Sort words alphabetically\n' +
            '2. Show numbers from lesser to greater\n' +
            '3. Show numbers from bigger to smaller\n' +
            '4. Display words in ascending order by number of letters in the word\n' +
            '5. Show only unique words\n' +
            '6. Show only unique values\n' +
            'Enter the operation number (or exit to quit): ', (operation) => {

            if (operation === 'exit') {
                rl.close();
                return;
            }

            let result;

            switch (operation) {
                case '1':
                    result = sortWordsABC(input);
                    break;
                case '2':
                    result = sortAsc(input);
                    break;
                case '3':
                    result = sortDesc(input);
                    break;
                case '4':
                    result = sortWordsByLength(input);
                    break;
                case '5':
                    result = getUniqueWords(input);
                    break;
                case '6':
                    result = getUnique(input);
                    break;
                default:
                    console.log('Invalid operation');
                    processInp();
                    return;
            }

            console.log('Result:', result.join(' '));
            processInp();
        });
    });
}

processInp();
