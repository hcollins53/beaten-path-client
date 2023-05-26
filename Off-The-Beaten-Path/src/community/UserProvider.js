const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const token = user["token"]

export const getUser = (hikeUser) => {
    return fetch(`http://localhost:8000/users/${hikeUser}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}
export const getUsers = () => {
    return fetch(`http://localhost:8000/users`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}
export const getUserProfile = (userId) => {
    return fetch(`http://localhost:8000/userprofiles?user=${userId}`, {
            headers: {
              "Accept": "application/json",
              "Authorization": `Token ${token}`
            }})
                .then(res => res.json())
}
export const getUserById = (id) => {
    return fetch(`http://localhost:8000/users/${id}`)
                .then(res => res.json())
}
export const getUserProfileById = (id) => {
    return fetch(`http://localhost:8000/userprofiles?user=${id}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}