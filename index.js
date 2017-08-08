
// This function assumes I will always be given an input with two spaces after a decimal

"Two thousand five hundred twenty-three and 04/100 dollars"

function convert(num) {
  let str = num.toString().replace(/[.]/g,"");

let length = str.length
let hold = []

  for (let i = 0; i < str.length; i++){
     switch (length) {
      case 1:
        hold.push('and ' + str[i-1] + str[i] + '/100 dollars');
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
