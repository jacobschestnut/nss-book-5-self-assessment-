import { getAuthors, getRecipients, getTopics, saveMail } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

export const Letter = () => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()

    let html = `
        <div class="container">

            <div class="field">
                <label class="label" for="letterAuthor">Author</label>
                <select class="authors" id="authors">
                    <option>Choose Author</option>
                    ${authors.map(author => {return `<option value="${author.id}">${author.name}</option>`}).join("")}
                </select>
            </div>

            <div class="field">
                <label class="label" for="letterRecipient">Recipient</label>
                <select class="recipients" id="recipients">
                    <option>Choose Recipient</option>
                    ${recipients.map(recipient => {return `<option value="${recipient.id}">${recipient.name}</option>`}).join("")}
                </select>
            </div>

            <div class="field">
                <label class="label" for="letterTopic">Topic</label>
                    ${topics.map(topic => {return `
                        <input name="topic" value="${topic.id}" id="${topic.id}" type="radio"/>
                        <label for="${topic.id}">${topic.name}</label>
                    `}).join("")}
            </div>

            <div class="field">
                <label for="content">Letter</label>
                <input type="text" name="content" class="input"/>
            </div>

            <div>
                <button type="submit" id="submit">Send Letter</button>
            </div>
        </div>
    `
    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
        // Get what the user typed into the form fields
        const letterAuthor = document.querySelector("select[class='authors']").value
        const authorEmail = document.querySelector(`#authors`).email
        const letterRecipient = document.querySelector("select[class='recipients']").value
        const recipientEmail = document.querySelector(`#recipients`).email
        const letterTopic = document.querySelector("input[name='topic']:checked").value
        const letterContent = document.querySelector("input[name='content']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            content: letterContent,
            author: letterAuthor,
            authorEmail: authorEmail, 
            recipient: letterRecipient,
            recipientEmail: recipientEmail,
            topic: letterTopic,
            date: Date.now()
        }

        // Send the data to the API for permanent storage
        saveMail(dataToSendToAPI)
    }
})