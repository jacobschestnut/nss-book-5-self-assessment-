import { getLetters } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

const convertLetterToListElement = (letter) => {
    return `
    <li>
        ${letter.content}
    </li>
    `
}

export const Sent = () => {
    const letters = getLetters()
    

    let html = `
        <ul>
            ${letters.map((letter) => convertLetterToListElement(letter)).join("")}
        </ul>
        `
return html
}