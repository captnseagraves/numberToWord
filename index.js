
// This function assumes I will always be given an input with two spaces after a decimal

// "Two thousand five hundred twenty-three and 04/100 dollars"

function convert(num) {
  let arr = num.toString().split('.')
  let hold = []
  console.log(arr)

  if (arr[1]) {
    hold.push('and ' + arr[1] + '/100 dollars')
  }

let length = arr[0].length

function ones(num) {
   switch (num) {
      case 0:
        return "zero"
        break;
      case 1:
        return "one"
        break;
      case 2:
        return "two"
        break;
      case 3:
        return "three"
        break;
      case 4:
        return "four"
        break;
      case 5:
        return "five"
        break;
      case 6:
        return "six"
        break;
      case 7:
        return "seven"
        break;
      case 8:
        return "eight"
        break;
      case 9:
        return "nine"
        break;
    }
}

function teens(num) {
   switch (num) {
      case 10:
        return "ten"
        break;
      case 11:
        return "eleven"
        break;
      case 12:
        return "twelve"
        break;
      case 13:
        return "thirteen"
        break;
      case 14:
        return "fourteen"
        break;
      case 15:
        return "fifteen"
        break;
      case 16:
        return "sixteen"
        break;
      case 17:
        return "seventeen"
        break;
      case 18:
        return "eighteen"
        break;
      case 19:
        return "nineteen"
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
        return "twenty"
        break;
      case 3:
        return "thirty"
        break;
      case 4:
        return "fourty"
        break;
      case 5:
        return "fifty"
        break;
      case 6:
        return "sixty"
        break;
      case 7:
        return "seventy"
        break;
      case 8:
        return "eighty"
        break;
      case 9:
        return "ninety"
        break;
    }
}


  for (let i = 0; i < arr[0].length; i++){
     switch (length) {
      case 1:
        hold.push('and ' + str[i-1] + str[i] + '/100 dollars');
        length = length - 1
        break;
      case 2:
        hold.push(String(str[i]));
        length--
        break;
      case 3:
        hold.push(String(str[i]));
        length--
        break;
      // case 4:
      //   day = "Thursday";
      //   break;
      // case 5:
      //   day = "Friday";
      //   break;
      // case 6:
      //   day = "Saturday";
    }
  }
 console.log(hold)
}

convert(2523.04)
