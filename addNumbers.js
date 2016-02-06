var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft < 1) {return completionCallback(sum);}
  reader.question("Give me a number", (num1) => {
    sum += parseInt(num1);

    numsLeft -= 1;
    completionCallback(sum);
    addNumbers(sum, numsLeft, completionCallback);
  });
};



addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
