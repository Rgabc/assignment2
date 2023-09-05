// 1 question about user age 
let age = parseInt(prompt("enter your age "));
age >= 18 ? console.log("you are an adult") : console.log("you are minor");
// 2 question 
let username = "rohit";
let password = 123;
let id = prompt("enter user name");
let pass = parseInt(prompt("enter only number"));
if (username == id && password == pass) {
    console.log("login successfully")

}
else {
    console.log("login failed ")
}
// 3 question
for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        console.log("this is even", i)

    }
    else (
        console.log("this is odd", i)
    )
}
//4th question
let color = prompt("enter your favourite color ");
if (color == "red") {
    console.log("Red is beautiful color")
}
else {
    console.log("i like your choice of color")
}
//5th question 
let grade =prompt("enter your grade like A,B,C,D")
if(grade=="a"||grade=="A"){
    alert("Congratulations on your excellent work")
}
else{
    alert("Keep working hard!")
}