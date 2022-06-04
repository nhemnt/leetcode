/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const mapping = {
      1: "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000: "M"
  }  
  
  const findNearest = (num) => {
      if(num > 0 && num < 5){
          return 1;
      }else if(num >= 5 && num < 10 ){
          return 5;
      }else if( num >=10 && num <50){
          return 10;
      }else if(num >= 50 && num < 100){
          return 50;
      }else if(num >= 100 && num < 500){
          return 100;
      }else if(num >= 500 && num < 1000){
          return 500;
      }else if(num >= 1000){
          return 1000;
      }
  }
  const getNext = (num) => {
      if(num > 0 && num < 5){
          return 5;
      }else if(num >= 5 && num < 10 ){
          return 10;
      }else if( num >=10 && num <50){
          return 50;
      }else if(num >= 50 && num < 100){
          return 100;
      }else if(num >= 100 && num < 500){
          return 500;
      }else if(num >= 500 && num < 1000){
          return 1000;
      }else if(num >= 1000){
          return 1000;
      }
  }
  const getRomanEq = (num) => {
    num.toStr
      let string = '';
      if((num).toString()[0] % 5 === 4){
          const nearest = getNext(num);
          string += mapping[nearest- num] + mapping[nearest];
          
      }else {
        const nearest = findNearest(num)
        // console.log({nearest})
        string += mapping[nearest]
          const remaining = num - nearest
        if(remaining !== 0){
            const secondNearest = findNearest(remaining);
            const multiple= remaining / secondNearest;
            // console.log({secondNearest, multiple})
            for(let i =0; i<multiple;i++){
                string += mapping[secondNearest]
            };
        }
      }
    return string;
  }
  
  const generateInput = (num) => {
      const input = num.toString().split("")
      const result = input.map((x,i) => x * Math.pow(10,  input.length -1 - i)).filter(x => !!x);
      // console.log({result});
        return result
  }
    
    return generateInput(num).map(x => getRomanEq(x)).join("")
};