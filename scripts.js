function newElement(){
    var li = document.createElement("li");

    var inputValue = document.getElementById("myInput").value;

    var tNode = document.createTextNode(inputValue);

    li.appendChild(tNode);

    document.getElementById("myUL").appendChild(li);
}
