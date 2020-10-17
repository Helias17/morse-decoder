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
    ' ': ' ',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length / 10; i++) {
        arr.push(expr.slice(i*10, (i+1)*10));
    }
    //console.log(arr);

    let newArr = [];

    arr.forEach( (item) => {

        let str2 = '';

      for (let i = 0; i < 10; i += 2) {
        //console.log(item.slice(i,i+2));
        if ( item.slice(i,i+2) == '10' ) {
            str2 += '.';
        } else if ( item.slice(i,i+2) == '11' ) {
            str2 += '-';
        } else if ( item.slice(i,i+2) == '**' ) {
            str2 = ' ';
        }
      }
      //console.log(str2);
      newArr.push(str2);
      str2 = '';

    } );

    //console.log(newArr);

    let result = '';

    newArr.forEach( (item) => {

        result += MORSE_TABLE[item];

    } )

        //console.log(result);
    return result;
}

module.exports = {
    decode
}