import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    mainContainer.innerHTML = PenPalSociety()
}

render()