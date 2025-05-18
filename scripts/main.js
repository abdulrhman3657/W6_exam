let api = "https://restcountries.com/v3.1/all"

let cards_container = document.getElementById("cards_container")

let login_btn = document.getElementById("login_btn")
let signup_btn = document.getElementById("signup_btn")
let logout_btn = document.getElementById("logout_btn")

logout_btn.addEventListener("click", () => {

    localStorage.setItem("username", "")
    localStorage.setItem("password", "")

    window.location.reload()

})

const getData = () => {

    fetch(api)
    .then((response) => response.json())
    .then(countries => {


        countries.forEach(country => {

        let cards_container = document.getElementById("cards_container")

        let card = document.createElement("div")
        card.className = "card border p-3 d-flex flex-column align-items-center bg-light  rounded"

        card.style.height = "30rem"

        let country_common_name = document.createElement("p")
        country_common_name.innerText = `common name: ${country.name.common}`

        let country_official_name = document.createElement("p")
        country_official_name.innerText = `official name: ${country.name.official}`

        let population = document.createElement("p")
        population.innerText = `population: ${country.population}`

        let img = document.createElement("img")
        img.src = country.flags.png
        // img.style.width = "50%"

        let region = document.createElement("p")
        region.innerText = `regoin: ${country.region}`

        let languages = document.createElement("span")
        languages.innerText = JSON.stringify(country.languages)
        languages.className = "w-75"

        // console.log(JSON.stringify(country.languages))

        googole_map = document.createElement("a")
        googole_map.href = country.maps.googleMaps
        googole_map.innerText = "google maps"

        card.appendChild(country_common_name)
        card.appendChild(country_official_name)
        card.appendChild(population)
        card.appendChild(img)
        card.appendChild(region)
        card.appendChild(languages)
        card.appendChild(googole_map)

        // console.log(card)

        // console.log(cards_container)

        cards_container.appendChild(card)
    
        })

        
    }).catch(err => {
        console.log(err)
    })


}

// getData()

if(localStorage.getItem("username")){
    let usr_msg = document.getElementById("usr_msg")
    usr_msg.innerText = localStorage.getItem("username")

    login_btn.classList.add("d-none")
    signup_btn.classList.add("d-none")
    logout_btn.classList.remove("d-none")

    getData()
}
