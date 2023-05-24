const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const token = user["token"]

export const AddNewMessage = (newMessage) => {
    return fetch("http://localhost:8000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(newMessage)
        })
            .then(res => res.json())
}
export const getUserSentMessages = (hikeUser) => {
    return fetch(`http://localhost:8000/messages?sender=${hikeUser}`, {
        headers: {
          "Accept": "application/json",
          "Authorization": `Token ${token}`
        }})
    .then(res => res.json())
}
export const getUserReceivedMessages = (hikeUser) => {
    return fetch(`http://localhost:8000/messages?receiver=${hikeUser}`, {
        headers: {
          "Accept": "application/json",
          "Authorization": `Token ${token}`
        }})
    .then(res => res.json())
}