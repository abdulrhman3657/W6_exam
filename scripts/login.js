let api = "https://682199fa259dad2655afc100.mockapi.io/users"

let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let login_btn = document.getElementById("login_btn")

login_btn.addEventListener("click", () => {

    fetch(api)
    .then((response) => response.json())
    .then(users => {

        let userExist = users.find(user => {
            return user.username == username.value && user.password == password.value
        })

        if(!userExist){
            alert("wrong username or password")
            return
        }


    }).then(() => {
        localStorage.setItem("username", username.value)
        localStorage.setItem("password", password.value)
        
        alert("you have logged in succesfully")
        window.location.href = "../index.html"
    })


})