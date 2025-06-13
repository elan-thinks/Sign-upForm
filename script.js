let body = document.querySelector("body");
let firstName = document.getElementById("firstName");

let lastName = document.getElementById("lastName");
let phone_Number = document.getElementById("phone-number");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");

let submit = document.querySelector("#submit");

submit.addEventListener('click', (e) => {
    e.preventDefault(); // prevents form submission if this is inside a form

    if (
        firstName.value.trim() !== "" &&
        lastName.value.trim() !== "" &&
        phone_Number.value.trim() !== "" &&
        email.value.trim() !== "" &&
        password.value.trim() !== "" &&
        confirm_password.value.trim() !== ""
    ) {
        let confirmWindow = document.createElement('div');
        let dimmed = document.createElement('div');

        dimmed.classList.add("dimmed");
        confirmWindow.classList = "confirmWindow"
        confirmWindow.innerHTML = `
            <h2>Hello, ${firstName.value}!</h2>
            <p>Your account is ready to swim with the fish 🐠</p>
            <button id="done" >Done</button>
        `;
        confirmWindow.style.padding = "10px";
        confirmWindow.style.background = "#e0f7ff";
        confirmWindow.style.border = "1px solid #b0e0ff";
        confirmWindow.style.borderRadius = "10px";
        confirmWindow.style.marginTop = "20px";


        //  body.style.opacity="0.1"
       
        document.querySelector('body').appendChild(dimmed);
        document.querySelector('.wrapper').appendChild(confirmWindow);

        let done = document.getElementById("done");
        done.addEventListener('click',()=>{
            confirmWindow.remove();
            dimmed.remove();
            firstName.value ="";
            lastName.value="";
            phone_Number.value="";
            email.value="";
            password.value="";
            confirm_password="";
        })
    } else {
        alert("Please fill out all fields! 🌊");
    }
});
