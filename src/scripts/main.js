import { fetchRecipients, fetchAuthors, fetchTopics, fetchMail } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    fetchAuthors().then(
        () => {
            fetchTopics().then(
                () => {
                    fetchRecipients().then(
                        () => {
                            fetchMail().then(
                                () => {
                                    mainContainer.innerHTML = PenPalSociety()
                                }
                            )
                        }
                    )
                }
            )
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()