const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    
   

export const getUser = (hikeUser) => {
  const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/users/${hikeUser}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}
export const getUsers = () => {
  const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/users`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}
export const getUserProfile = (userId) => {
  const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/userprofiles?user=${userId}`, {
            headers: {
              "Accept": "application/json",
              "Authorization": `Token ${token}`
            }})
                .then(res => res.json())
}
export const getUserById = (id) => {
  const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/users/${id}`)
                .then(res => res.json())
}
export const getUserProfileById = (id) => {
  const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/userprofiles?user=${id}`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
                .then(res => res.json())
}