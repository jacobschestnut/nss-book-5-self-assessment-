import { Letter } from "./Letter.js"
import { Sent } from "./sentMail.js"

export const PenPalSociety = () => {
    return `
    <div class="background">
        <div id="top-half" class="container unsent">
            <h1>Pen Pal Society</h1>
            <section class="letter">
                ${Letter()}
            </section>
        </div>

        <div id="bottom-half" class="container">
            <h1>Sent Letters</h1>
            <section>
                ${Sent()}
            </section>
        </div> 
    </div>
    `
}