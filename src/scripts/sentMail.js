import { getLetters, getAuthors, getRecipients, getTopics } from "./dataAccess.js";



const convertLetterToListElement = (letter) => {
   
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()

    const foundAuthor = authors.find(
        (author) => {
            return author.id === parseInt(letter.author)
        }
    )

    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === parseInt(letter.recipient)
        }
    )

    const foundTopic = topics.find(
        (topic) => {
            return topic.id === parseInt(letter.topic)
        }
    )

    const authorEmail = foundAuthor.email
    const author = foundAuthor.name
    const recipientEmail = foundRecipient.email
    const recipient = foundRecipient.name
    const topic = foundTopic.name

    return `
        <li class="sent field">

            <p class="center-text">About ${topic}</p>
            <p>Dear ${recipient} (${recipientEmail}),</p>  
            <p>${letter.content}</p>
            <p>Sincerely, ${author} (${authorEmail})</p>
            <p class="center-text">Sent On: ${letter.date}</p>

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