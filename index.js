// Iteration 1: Names and Input
let hacker1;
let hacker2;

//Example for hacker1 > hacker2
//hacker1 = "Jose";
//hacker2 = "Pedro";
//Example for hacker1 < hacker2
//hacker1 = "Jorge";
//hacker2 = "Juan";
//Example for hacker1 == hacker2
//hacker1 = "Luis";
//hacker2 = "Luis";
//Example for hacker1 !== hacker2
hacker1 = "Juan";
hacker2 = "Jose";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let hackerUpper = "";
for(let i = 0; i < hacker1.length; i++){
  hackerUpper += hacker1[i].toUpperCase() + " ";
}
console.log(hackerUpper);

let hackerReverse = "";
for(let j = hacker2.length - 1; j >= 0; j--){
  hackerReverse += hacker2[j];
}
console.log(hackerReverse);

if(hacker1 < hacker2){
  console.log("The driver's name goes first.");
}else if(hacker2 < hacker1){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log("What?! You both have the same name?");
}

// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in sagittis mi, semper cursus arcu. Nam semper, nisl a viverra maximus, est velit malesuada libero, eu volutpat nisl lectus vel tellus. Suspendisse potenti. Fusce ac tellus sed lacus pellentesque euismod sit amet ut augue. Aenean laoreet ex in libero pharetra consequat. In aliquam metus nec suscipit sagittis. Phasellus interdum vitae sem vitae dictum. Pellentesque id lacinia mauris. Nunc luctus magna imperdiet, bibendum nunc eu, aliquam orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent lobortis fermentum dolor at condimentum.

  Morbi eu imperdiet purus. Phasellus tincidunt turpis at elit interdum, in maximus metus fringilla. Vivamus non erat hendrerit, lobortis ex at, iaculis neque. Ut neque purus, pharetra a porttitor vitae, posuere vel ipsum. Sed vel dolor ac purus porttitor tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer neque mi, tempus dignissim tempor at, sodales sit amet dui. In quis ullamcorper ipsum, at hendrerit est.

  Suspendisse vitae felis id quam fermentum tristique. Sed pellentesque varius orci. Vivamus finibus aliquam justo nec elementum. Nam cursus et metus non bibendum. Nunc sit amet imperdiet tellus. Etiam dui justo, pharetra sed neque quis, sollicitudin vehicula erat. Aliquam luctus nisl vel ante faucibus mollis.`

let countWords = 0;
for(let i = 0; i < longText.length; i++){
    if(longText[i] === " "){
      countWords++;
    }
}
console.log(countWords - 1);

let count = 0;
for(let i = 0; i < longText.length; i++){
  if(longText[i] === 'e'){
    if(longText[i+1] === 't'){
      count += 1;
    }
  }
}
console.log(count);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
//let phraseToCheck = "Amor, Roma";
//let phraseToCheck = "race car";
//let phraseToCheck = "stack cats";
//let phraseToCheck = "step on no pets";
//let phraseToCheck = "taco cat";
//let phraseToCheck = "put it up";
//let phraseToCheck = "Was it a car or a cat I saw?";
//let phraseToCheck = "No 'x' in Nixon";

let result = false;
let splitPhrase = phraseToCheck.replaceAll(" ", "").toLowerCase();
for(let i = 0; i < splitPhrase.length / 2; i++){
  let size = splitPhrase.length - 1;
  if(splitPhrase[i] !== splitPhrase[size]){
    break;
  }
  size--;
  result = true;
}

if(result == false){
  console.log("Is not a palindrome");
}else{
  console.log("Is a palindrome");
}