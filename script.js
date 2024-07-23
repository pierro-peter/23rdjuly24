const submitForm = () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');

    let usernameFormat = /^[0-9a-zA-Z]$/;
    let emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let passwordFormat = /^[a-zA-Z0-9]{5,50}$/;

    if( usernameFormat.test(username.value)==false) {
        username.style.border = "1 px solid red";
        document.getElementById("usernameError").textContent = "user name Format is not correct"
        return false;
    } else {
        username.style.border = "";
        document.getElementById("usernameError").innerHTML = "";
    }
}


let submitButton = document.getElementById("submit")

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitForm();
});