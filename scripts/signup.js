let api = "https://682199fa259dad2655afc100.mockapi.io/users"

let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signup_btn = document.getElementById("signup_btn")

signup_btn.addEventListener("click", () => {

    if(username.value.length <= 4){
        alert("username must be longer than 4 characters")
        return
    }

    if(!email.value.includes("@")){
        alert("email must include @")
        return
    }

    if(password.value.length <= 6){
        alert("password must be longer than 6 characters")
        return
    }

    fetch(api, {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        }).then(() => {
            alert("signed up succesfully")
            window.location.href = "./login.html"

        })

})