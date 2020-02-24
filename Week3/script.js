function AddFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);

    cell1.style.height = "50px";
    addItem(cell1);
}

function addItem(cell1){
    var ul = cell1;
    var candidate = document.getElementById("candidate");
    if(candidate.value==""){alert('no');}
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.style.verticalAlign = "middle"; 
    checkbox.style.marginLeft = "15px";
    checkbox.id = "id";



    var label = document.createElement('label')
    label.htmlFor = "id";
    label.marginLeft = "40px";
    label.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(checkbox);
    ul.appendChild(label);

    var btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = '<span class="glyphicon glyphicon-trash" style="color:red; font-size:15px;"></span>';
    btn.style.height = "30px";
    btn.style.width = "30px";
    btn.style.float = "right";
    btn.style.padding = "0"
    ul.appendChild(btn);

    btn.onclick = function(){
        ul.removeChild(label);
        ul.removeChild(checkbox);
        ul.removeChild(btn);
        ul.parentNode.removeChild(ul);
    }

    checkbox.onclick = function(){
        if (checkbox.checked == true){
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }
}
