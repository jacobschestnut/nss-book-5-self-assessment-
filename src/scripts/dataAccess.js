const applicationState = {
    authors: [],
    topics: [],
    recipients: []
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
    applicationState.authors.sort(author => ({...author}))
}

//TOPICS--------------------------
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.jsonn())
        .then(
            (data) => {
                applicationState.topics = data;
            }
        )
}

export const getTopics = () => {
    applicationState.topics.sort(topic => ({...topic}))
}

//RECIPIENTS--------------------------
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.jsonn())
        .then(
            (data) => {
                applicationState.recipients = data;
            }
        )
}

export const getRecipients = () => {
    applicationState.recipients.sort(recipient => ({...recipient}))
}