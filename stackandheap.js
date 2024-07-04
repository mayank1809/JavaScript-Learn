/*
Memory:-

1-stack (all primitive) (copy)

2-heap (all non primitive) (reference)


*/

//stack
let myname = "xyz"
let anothername= myname
console.log(anothername);
anothername = "yrd"

console.log(anothername);
console.log(myname);


//heap
let user1 = {
    name : "x",
    id: 123
}
console.log(user1);

let user2 = user1

user2.id = 321

console.log(user1);