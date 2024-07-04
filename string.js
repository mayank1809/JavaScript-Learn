let a = "Mayank"
let b = 'Ambica'

console.log("hello my name is " + a + " and my friend name is " + b); //old way

console.log(`hello my name is ${a} and my friend namae is ${b}`);  //modern way

// console.log(typeof a);  string

const gamename = new String ('abcdefghijklmn%%opqrstu%%vwxyz')
console.log(gamename);  //gamename[1]

console.log(gamename.length); 

console.log(gamename.toUpperCase()); 

console.log(gamename.charAt(3)); 

console.log(gamename.indexOf('o')); 

console.log(gamename.substring(0,4)); 

const string2 = gamename.slice(-26,3);
console.log(string2);

let w  = "     helo    "
console.log(w.trim());  //whitespace char

console.log(gamename.replace('abcd','%%%%'));


console.log(gamename.split('%'));








