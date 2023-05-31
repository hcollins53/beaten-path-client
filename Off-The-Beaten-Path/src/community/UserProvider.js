const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const token = user["token"]
   

export const getUser = (hikeUser) => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/users/${hikeUser}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}
export const getUsers = () => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/users`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}
export const getUserProfile = (userId) => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/userprofiles?user=${userId}`, {
            headers: {
              "Accept": "application/json",
              "Authorization": `Token ${token}`
            }})
                .then(res => res.json())
}
export const getUserById = (id) => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/users/${id}`)
                .then(res => res.json())
}
export const getUserProfileById = (id) => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/userprofiles?user=${id}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}