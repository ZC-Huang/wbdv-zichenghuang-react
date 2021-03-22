const TOPIC_URL = process.env.REACT_APP_TOPIC_URL
const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const createWidgetForTopic = (tid, widget) =>
    fetch(`${TOPIC_URL}/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE",
    })
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createWidgetForTopic,
    deleteWidget, updateWidget
};