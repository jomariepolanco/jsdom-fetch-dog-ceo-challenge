console.log('%c HI', 'color: firebrick')

const imgURL = "https://dog.ceo/api/breeds/image/random/4"
//when x (page load) event happens
//do y (GET) fetch 
//slap z (dog images) on the dom
//when x (page load) event happens
//do y (GET) fetch 
//slap z (dog breeds) on the dom

//DOM Elements
const container = document.querySelector("#dog-image-container")
const breedsContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("select#breed-dropwdown")
//Event Listeners

dropdown.addEventListener("change", event => {
    const breedLetter = event.target.value // or dropdown.value)
    const breedLis = breedsContainer.querySelectorAll("li")
    breedLis.forEach(li => {
        if (li.textContent[0] === breedLetter) {
            //show it
            li.style.display = ""
        } else {
            //hide it
            li.style.display = "none"
        }
    })
})

breedsContainer.addEventListener('click', event => {
    if (event.target.tagName === "LI") {
        event.target.style.color = "red"
    }
})

//Fetch Code
const getDogBreeds = () => {
    fetch(breedURL)
        .then(resp => resp.json())
        .then(data => {
            //for...in
            //.keys
            const breedsArray = Object.keys(data.message)
            breedsArray.forEach(breed => {
                const dogLi = document.createElement("li")
                dogLi.textContent = breed 
                breedsContainer.append(dogLi)
            })
    })
}
const getDogImages = () => {
    fetch(imgURL)
        .then(resp => resp.json())
        .then(data => {
            data.message.forEach(renderOneImg)
    })

}
//console.log to see what the data looks likes


//Rendering Logic
const renderOneImage = urlString => {
    const img = document.createElement("img")
    img.src = urlString 
    container.append(img)
})

//Initialize!
getDogImages()