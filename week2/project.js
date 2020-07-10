var navbar = document.getElementById("navbar")

var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my site"
var myh1 = document.getElementById("first")
myh1.append(newh1)

var newP = document.createElement("p")
newP.textContent = "Here is some text to get you started"
var myP = document.getElementById("second")
myP.append(newP)

var newLi = document.createElement("li")
newLi.textContent = "1st Item"
var myLi = document.getElementById("third")
myLi.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "2nd Item"
var myLi = document.getElementById("third")
myLi.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "3rd Item"
var myLi = document.getElementById("third")
myLi.append(newLi)

var newFoot = document.createElement("footer")
newFoot.textContent = "Thanks for visiting!"
var myFoot = document.getElementById("fourth")
myFoot.append(newFoot)
