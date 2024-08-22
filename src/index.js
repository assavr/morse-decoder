const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
    const amountLetters = expr.length / 10;
    const arrsLettersNum = new Array(amountLetters).fill([]).map((letterInNum, i) => expr.slice(i*10, (i + 1) * 10))
    const morseLetters = arrsLettersNum.map((letter) => {
        return letter.replace(/10/g,'.').replace(/11/g, '-').replace(/0/g,'')
        })
    const res = morseLetters.map((letter) => MORSE_TABLE[letter]).join('')
    return res
}

decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010')

module.exports = {
    decode
}