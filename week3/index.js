var newHeader = [
    "Hello World", 
    "Hello World", 
    "Hello World", 
    "Hello World", 
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
]

var dupHeader = document.getElementById("head1")

for (var i = 0; i < newHeader.length; i++) {
    head1.innerHTML += "<h1>" + newHeader[i] + "</h1>",
    head1.style.color = "green"
}

var newName = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

var dupName = document.getElementById("name")

for (var i = 0; i < newName.length; i++) {
    head1.innerHTML += "<p>" + newName[i] + "</p>"
}
head1.removeAttribute(color)
