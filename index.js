// This function assumes I will always be given an input with two spaces after a decimal

// "Two thousand five hundred twenty-three and 04/100 dollars"

function convert(num) {
    let str = num.toString()
    let arr = str.split('.')
    let hold = []
    console.log('num', num)
    console.log('str', str)
    console.log('arr', arr)

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
        console.log('teens num', typeof num);
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

    // returns wierd result due to JavaScript coercing .50 to 0.5 at input
    //
    // let length1 = arr[1].length
    //
    // if (arr[0] === '0') {
    //   if (arr[1].length === 1) {
    //     console.log('arr[1]', arr[1]);
    //   }
    //   for (let i = 0; i < arr[0].length; i++){
    //     switch (length1) {
    //       case 1:
    //       hold.push(ones(Number(arr[1][i])) + 'cents');
    //       length1 = length1 - 1
    //       break;
    //       case 2:
    //       if (arr[1][i] === 1) {
    //         hold.push(teens(Number(arr[1][i])) + 'cents')
    //         length1 = length1 - 2;
    //       } else {
    //         hold.push(tens(Number(arr[1][i])) + 'cents')
    //         length1 = length1 - 1
    //       }
    //       break;
    //     }
    //   }
    //
    // }

    let length2 = arr[0].length

    for (let i = 0; i < arr[0].length; i++) {
        let num1 = Number(arr[0][i])
        let num2 = Number(String(arr[0][i]) + String(arr[0][i + 1]))
        console.log('arr[0][i]', arr[0][i]);
        switch (length2) {
            case 1:
                console.log('case 1');
                hold.push(ones(num1));
                length2 = length2 - 1
                break;
            case 2:
                console.log('case 2');
                if (arr[0][i] === "1") {
                    console.log('teens');
                    hold.push(teens(num2))
                    length2 = length2 - 2;
                } else {
                    console.log('tens');
                    hold.push(tens(num1))
                    length2 = length2 - 1
                }
                break;
            case 3:
                console.log('case 3');
                if (arr[0][i] === '0') {
                    length2 = length2 - 1
                    break;
                }
                hold.push(ones(num1) + 'hundred ');
                length2 = length2 - 1
                break;
            case 4:
                console.log('case 4');
                hold.push(ones(num1) + 'thousand ');
                length2 = length2 - 1
                break;
            case 5:
                console.log('case 5');
                if (arr[0][i] === '1') {
                    console.log('num2', num2);
                    hold.push(teens(num2) + 'thousand ')
                    length2 = length2 - 2;
                    i++
                } else {
                    hold.push(tens(num1))
                    length2 = length2 - 1
                }
                break;
            case 6:
                console.log('case 6');
                hold.push(ones(num1) + 'hundred ');
                length2 = length2 - 1
                break;
        }
    }

    if (arr[1]) {
        hold.push('and ' + arr[1] + '/100 dollars')
    } else {
        hold.push('dollars')
    }
    console.log(hold);
    return hold.join('')
}

convert(2523.04)

module.exports = {
    convert
}
