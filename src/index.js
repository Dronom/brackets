module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < bracketsConfig.length; i++){
      if (str[0] == bracketsConfig[i][1] && bracketsConfig[i][0] != bracketsConfig[i][1] ) {
        return false;}
    }

  for (let i = 0; i < str.length; i++) { 
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        if (str[i] != bracketsConfig[j][1]) {
          stack.push(str[i]);
          break;
        }
        else if(stack[stack.length - 1] == str[i]) {
          stack.pop();
          break;
        }
        else{
          stack.push(str[i]);
          break;
        }
      }
      else if(str[i] == bracketsConfig[j][1]) {
        if (stack[stack.length - 1] == bracketsConfig[j][0]) {
          stack.pop();
          break;
        }
      else return false;
      } 
    }
  }
  if (stack.length == 0) {
  return true;
  }
  else return false;
}