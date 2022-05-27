// question 1

let parent = document.getElementById("main-content");
let childs = parent.childNodes
document.write("Childs Elements of 'main-content' element"+"<br>")
for(let i = 0 ; i < childs.length ; i++) {
    document.write(childs[i] + "<br> <br>")
}


let all = document.getElementsByClassName('render');
document.write("<br> <br>")
for(let k = 0 ; k < all.length ; k++) {
    document.write(all[k].innerHTML + "<br> <br>")
}


let fval = document.getElementById('first-name'); 
fval.value = "jehanzeb";


let lval = document.getElementById('last-name'); 
lval.value = "Siddiqui";


let email = document.getElementById('email'); 
email.value = "jehanzebsiddiqui287@gmail.com";













// question 2

let type = document.getElementById('form-content').nodeType
console.log(type)

let type2 = document.getElementById('lastName')
console.log(type2.nodeType)

console.log(type2.childNodes)

let update = type2.value;

console.log(update = 'I have updated the value')




let main = document.getElementById('main-content')

let fchild = main.firstChild
console.log(fchild)
console.log(main.lastChild)

console.log(type2.previousSibling)

console.log(type2.nextSibling)



console.log(email.nodeType)
console.log(email.parentNode)