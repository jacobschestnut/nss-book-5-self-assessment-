import { Letter } from "./Letter.js"
import { Sent } from "./sentMail.js"

export const PenPalSociety = () => {
    return `
        <div>
            <h1>Pen Pal Society</h1>
            <section class="letter">
                ${Letter()}
            </section>
        </div>
            <h1>Sent Letters</h1>
            <section>
                ${Sent()}
            </section>
    `
}