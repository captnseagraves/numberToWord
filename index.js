function ones(num) {
    switch (num) {
        case 0:
            return ""
            break;
        case 1:
            return "one "
            break;
        case 2:
            return "two "
            break;
        case 3:
            return "three "
            break;
        case 4:
            return "four "
            break;
        case 5:
            return "five "
            break;
        case 6:
            return "six "
            break;
        case 7:
            return "seven "
            break;
        case 8:
            return "eight "
            break;
        case 9:
            return "nine "
            break;
    }
}

function teens(num) {
    switch (num) {
        case 10:
            return "ten "
            break;
        case 11:
            return "eleven "
            break;
        case 12:
            return "twelve "
            break;
        case 13:
            return "thirteen "
            break;
        case 14:
            return "fourteen "
            break;
        case 15:
            return "fifteen "
            break;
        case 16:
            return "sixteen "
            break;
        case 17:
            return "seventeen "
            break;
        case 18:
            return "eighteen "
            break;
        case 19:
            return "nineteen "
            break;
    }
}

function tens(num) {
    switch (num) {
        case 0:
            return ""
            break;
        case 1:
            return ""
            break;
        case 2:
            return "twenty "
            break;
        case 3:
            return "thirty "
            break;
        case 4:
            return "fourty "
            break;
        case 5:
            return "fifty "
            break;
        case 6:
            return "sixty "
            break;
        case 7:
            return "seventy "
            break;
        case 8:
            return "eighty "
            break;
        case 9:
            return "ninety "
            break;
    }
}
function round(dec) {
    dec = '.' + dec
    dec = Number(dec).toFixed(2)
    let newArr = String(dec).split('.')
    dec = newArr[1]
    return dec
}

function cents(arrSub1) {
    let hold = []

    if (arrSub1.length === 1) {
        arrSub1 = arrSub1 + '0'
    }

    if (arrSub1.length > 2) {
        arrSub1 = round(arrSub1)
    }

    let length1 = arrSub1.length

    for (let i = 0; i < arrSub1.length; i++) {

        switch (length1) {
            case 1:
                if (arrSub1[i] === '0') {
                    hold.push(ones(Number(arrSub1[i])));

                    length1 = length1 - 1
                    break;
                }
                hold.push(ones(Number(arrSub1[i])));
                length1 = length1 - 1
                break;
            case 2:
                if (arrSub1[i] === 1) {
                    hold.push(teens(Number(arrSub1[i])))
                    length1 = length1 - 2;
                } else {
                    hold.push(tens(Number(arrSub1[i])))
                    length1 = length1 - 1;
                }
                break;
        }
    }
    return hold.join('')
}

function dollars(arrSub0) {
    let hold = []
    let length2 = arrSub0.length

    for (let i = 0; i < arrSub0.length; i++) {
        let num1 = Number(arrSub0[i])
        let num2 = Number(String(arrSub0[i]) + String(arrSub0[i + 1]))

        switch (length2) {
            case 1:
                hold.push(ones(num1));
                length2 = length2 - 1
                break;
            case 2:
                if (arrSub0[i] === "1") {
                    hold.push(teens(num2))
                    length2 = length2 - 2;
                } else {
                    hold.push(tens(num1))
                    length2 = length2 - 1
                }
                break;
            case 3:
                if (arrSub0[i] === '0') {
                    length2 = length2 - 1
                    break;
                }
                hold.push(ones(num1) + 'hundred ');
                length2 = length2 - 1
                break;
            case 4:
                hold.push(ones(num1) + 'thousand ');
                length2 = length2 - 1
                break;
            case 5:
                if (arrSub0[i] === '1') {
                    hold.push(teens(num2) + 'thousand ')
                    length2 = length2 - 2;
                    i++
                } else {
                    hold.push(tens(num1))
                    length2 = length2 - 1
                }
                break;
            case 6:
                if (arrSub0[i] === '0') {
                    length2 = length2 - 1
                    break;
                }
                hold.push(ones(num1) + 'hundred ');
                length2 = length2 - 1
                break;
            case 7:
                hold.push(ones(num1) + 'million ');
                length2 = length2 - 1
                break;
            case 8:
                if (arrSub0[i] === '1') {
                    hold.push(teens(num2) + 'million ')
                    length2 = length2 - 2;
                    i++
                } else {
                    hold.push(tens(num1))
                    length2 = length2 - 1
                }
                break;
            case 9:
                hold.push(ones(num1) + 'hundred ');
                length2 = length2 - 1
                break;
            case 10:
                hold.push(ones(num1) + 'billion ');
                length2 = length2 - 1
                break;
        }
    }
    return hold.join('')
}

function convert(num) {

    if (typeof num !== 'number') {
        return "Please, enter a number."
    }

    if (num === 0 || num < 0) {
        return "Please, enter a positive integer."
    }

    let str = num.toString()
    let arr = str.split('.')
    let hold = []

    if (arr[0] === '0' && arr[1]) {
        hold.push(cents(arr[1]) + 'cents')
    } else if (arr[0] !== '0' && arr[1]) {
        if (arr[1].length > 2) {
            arr[1] = round(arr[1])
        }
        hold.push(dollars(arr[0]) + 'and ' + arr[1] + '/100 dollars')
    } else if (!arr[1]) {
        hold.push(dollars(arr[0]) + 'dollars')
    }
    return hold.join('')
}

module.exports = {
    convert
}
