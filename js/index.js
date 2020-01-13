// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = "Han";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Chewie";

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
     console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}

// Iteration 3: Loops

let letters1 = " ";
for (let i = 0; i <= hacker1.length - 1; i++) {
    letters1 = letters1 + hacker1[i] + " "
} 
console.log (letters1.toUpperCase())

let letters2 = " "
for (let i = hacker2.length - 1; i >= 0; i--) {
    letters2 = letters2 + hacker2[i]
}
console.log (letters2)

if (hacker1 < hacker2) {
    console.log(`${hacker1} goes first`)
} else if (hacker2 < hacker1) {
    console.log(`Yo, ${hacker2} goes first definitely`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1:

let ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sollicitudin dolor. Maecenas est augue, dapibus id ante vitae, eleifend pellentesque nulla. Nulla varius elit facilisis nisl malesuada lobortis. Vivamus maximus id mi eu pretium. Cras eget convallis neque, non imperdiet nibh. Vivamus euismod volutpat scelerisque. Nam euismod lacus sit amet arcu placerat, non lacinia nisl malesuada.Aliquam at risus et felis fringilla dignissim ac vitae massa. Curabitur scelerisque, risus eu venenatis cursus, sapien nisl iaculis turpis, a suscipit risus neque vitae magna. Proin id sagittis odio. Suspendisse sed nulla vulputate, aliquam nibh a, facilisis nisi. Donec porta ipsum finibus risus faucibus, ut interdum neque commodo. Integer consectetur arcu felis, varius ullamcorper urna eleifend eu. Nulla mollis tincidunt neque, id fermentum urna auctor a. Duis sollicitudin cursus feugiat. Phasellus sagittis, dui a ornare interdum, enim nulla viverra libero, ac mollis mauris odio quis purus.Fusce ut nunc ut odio suscipit vestibulum. Vivamus ac faucibus ex. Nam in tellus auctor, dapibus risus sit amet, placerat sem. Integer lacinia non eros a pretium. In quis sapien a mauris aliquet luctus a eu erat. Sed id pharetra nisi. Aenean pharetra lectus at tortor porta, a vehicula dui luctus. Sed a mauris ex. Curabitur in accumsan velit, ultrices commodo leo. Quisque efficitur diam a tristique congue. Nam sem libero, hendrerit eget lacus et, tempor cursus nulla. Morbi sagittis porta mollis. Sed pulvinar turpis a arcu fermentum, sit amet ullamcorper arcu finibus. Nulla lobortis, metus nec congue hendrerit, mauris nulla placerat mi, vel molestie lacus felis vitae eros. Nam varius dolor et tortor consequat, eu faucibus nulla volutpat. Etiam a tempus justo."

let numberOfWords = 0;
for (let i = 0; i < ipsum.length; i++) {
  if (ipsum[i] === " ") {
      numberOfWords += 1
      }
} 
console.log(numberOfWords + 1)

var count = (ipsum.match(/ et /g) || []).length;
console.log(count);

// Bonus 2:

let phraseToCheck = "No 'x' in Nixon";
phraseToCheck = phraseToCheck.replace(/\s/g, '');
phraseToCheck = phraseToCheck.replace(/[^a-zA-Z ]/g, "");

let phraseFirstHalf = "";
for (let i = 0; i < phraseToCheck.length / 2; i++) {
  phraseFirstHalf += phraseToCheck[i]
}

let phraseSecondHalf = "";
for (let i = phraseToCheck.length - 1; i >= phraseToCheck.length / 2; i--) {
  phraseSecondHalf += phraseToCheck[i]
}

if (phraseFirstHalf.toLowerCase() == phraseSecondHalf.toLowerCase()) {
  console.log('Yes! it is a palindrome!')
} else {
  console.log('Nope, not a palindrome')
}
