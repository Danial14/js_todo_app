function addIteM(){
    var userInput = document.getElementById("inp");
    if(userInput.value == ""){
        alert("Please type soMething in input box to add it in the todo-list");
    }
    else{
        var id = Date.now().toString();
        var iteMContainer = document.getElementById("custoMIteMs");
        var MainDiv = document.createElement("div");
        MainDiv.setAttribute("class", "input-group mb-3");
        var childDiv = document.createElement("div");
        childDiv.setAttribute("class", "input-group-prepend");
        var grandChildDiv = document.createElement("div");
        grandChildDiv.setAttribute("class", "input-group-text");
        var inp1 = document.createElement("input");
        inp1.setAttribute("type", "checkbox");
        inp1.setAttribute("aria-label", "Checkbox for following text input");
        grandChildDiv.appendChild(inp1);
        childDiv.appendChild(grandChildDiv);
        var inp2 = document.createElement("input");
        inp2.setAttribute("type", "text");
        inp2.setAttribute("class", "form-control");
        inp2.setAttribute("aria-label", "Text input with checkbox");
        inp2.setAttribute("disabled", "true");
        inp2.setAttribute("id", id);
        inp2.setAttribute("value", userInput.value);
        MainDiv.appendChild(childDiv);
        MainDiv.appendChild(inp2);
        iteMContainer.appendChild(MainDiv);
        userInput.value = "";
    }
    
}
function deleteIteMS(){
    var MainDiv = document.getElementsByClassName("mb-3");
    for(var i = 0; i < MainDiv.length; i++){
        var checkbox = MainDiv[i].getElementsByTagName("input")[0];
        if(checkbox.checked){
            MainDiv[i].remove();
        }
    }
}
var inputs = [];
function edit(){
    var editForM = document.getElementById("edit_iteM");
    if(editForM.style.visibility == "hidden"){
        var showForM = false;
        var MainDiv = document.getElementsByClassName("mb-3");
        for(var i = 0; i < MainDiv.length; i++){
            var checkbox = MainDiv[i].getElementsByTagName("input")[0];
            if(checkbox.checked){
                showForM = true;
                var inp = MainDiv[i].getElementsByTagName("input")[1];
                inputs.push(inp);
                var inputDiv = document.createElement("div");
                var id = Date.now().toString();
                inputDiv.setAttribute("class", "form-group");
                var label = document.createElement("label");
                label.innerText = "Edit iteM";
                label.setAttribute("for", id);
                var userInput = document.createElement("input");
                userInput.setAttribute("type", "text");
                userInput.setAttribute("class", "form-control");
                userInput.setAttribute("id", id);
                userInput.setAttribute("value", inp.value);
                inputDiv.appendChild(label);
                inputDiv.appendChild(userInput);
                editForM.appendChild(inputDiv);
            }
            
        }
        if(showForM){
            var button = document.createElement("button");
            button.setAttribute("type", "submit");
            button.setAttribute("class", "btn btn-primary");
            button.innerText = "SubMit";
            button.setAttribute("onclick", "update()");
            editForM.appendChild(button);
            editForM.style.visibility = "visible";
        }
    }
}
function update(){
    var editForM = document.getElementById("edit_iteM");
    var editForMInputs = editForM.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = editForMInputs[i].value;
    }
    $("#edit_iteM").empty();
    editForM.style.visibility = "hidden";
    inputs = [];
}