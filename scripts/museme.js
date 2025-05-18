let api = "https://api.harvardartmuseums.org/Object?apikey=dbe1060a-d9ce-4d69-86d0-695ac46aa172"

    fetch(api)
    .then((response) => response.json())
    .then(data => {

        // console.log(data.records)
        // console.log(records.records[0])
        
        // console.log(records.records[1].title)
        // console.log(records.records[0].primaryimageurl)

        data.records.forEach(record => {
            
            // console.log(record.primaryimageurl) // image
            // console.log(record.title) // title
            // console.log(record.people[0].name) // artist
            // console.log(record.dated) // date

            let cards_container = document.getElementById("cards_container")

            let card = document.createElement("div")
            card.className = "border d-flex flex-column align-items-center"

            let img = document.createElement("img")
            img.src = record.primaryimageurl
            img.style.width = "50%"

            let title = document.createElement("p")
            title.innerText = record.title

            let artist = document.createElement("p")
            artist.innerText = record.people[0].name


            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(artist)

            cards_container.appendChild(card)


        });
        
    }).catch(err => {
        console.log(err)
    })