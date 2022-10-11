
//ELEMENTLER
let listD = document.querySelector("#list")
let taskD = document.querySelector("#task")
let btnD = document.querySelector("toastBtn")
let liLength = document.getElementsByTagName("li")


for (let i = 0; i < liLength.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liLength[i].append(closeButton);
    liLength[i].onclick = check;
}





btnD.addEventListener(click, newElement)


//FONKSIYONLAR
function newElement() {
    if (taskD.value == 0) {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        let liDOM = document.createElement("li")
        listD.appendChild(liDOM);
        liDOM.innerHTML = taskD.value;
        taskD.value = "";



        liDOM.onclick = check;
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        liDOM.append(closeButton);
        listD.append(liDOM);
        inputElement.value = ("");
    }
}

function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}