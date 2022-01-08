const applicationState = {
    authors: [],
    topics: [],
    recipients: [],
    sentMail: []
}

const API = "http://localhost:8088"

// json-server database.json -p 8088 -w <--- SERVE API WITH THIS

//AUTHORS--------------------------
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data;
            }
        )
}

export const getAuthors = () => {
   return applicationState.authors.map(author => ({...author}))
}

//TOPICS--------------------------
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data;
            }
        )
}

export const getTopics = () => {
   return applicationState.topics.map(topic => ({...topic}))
}

//RECIPIENTS--------------------------
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.recipients = data;
            }
        )
}

export const getRecipients = () => {
   return applicationState.recipients.map(recipient => ({...recipient}))
}

//SENT MAIL-------------------------------

export const saveMail = (data) => {
    const saveMail = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch(`${API}/sentMail`, saveMail)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchMail = () => {
    return fetch(`${API}/sentMail`)
        .then(response => response.json())
        .then(
            (data) => {
                // Store the external state in application state
                applicationState.sentMail = data
            }
        )
}

export const getLetters = () => {
    return applicationState.sentMail.map(letter => ({...letter}))
}