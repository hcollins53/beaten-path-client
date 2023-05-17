export const loginUser = (user) => {
    return fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
  }
  
  export const registerUser = (user) => {
    return fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
  }  

export const findEmail = (email) => {
        return fetch(`http://localhost:8088/users?email=${email}`)
                .then(res => res.json())
}
export const getUser = (hikeUser) => {
    return fetch(`http://localhost:8088/users?id=${hikeUser.id}`)
                .then(res => res.json())
}
export const getUsers = () => {
    return fetch(`http://localhost:8088/users`)
                .then(res => res.json())
}
export const getUserProfile = (userId) => {
    return fetch(`http://localhost:8088/userProfiles?user=${userId}`)
                .then(res => res.json())
}
export const getUserById = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
                .then(res => res.json())
}
export const getUserProfileById = (id) => {
    return fetch(`http://localhost:8088/userProfiles?_expand=user&userId=${id}`)
                .then(res => res.json())
}