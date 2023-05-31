

export const loginUser = (user) => {
    return fetch("https://beatenpath-app-pvyzi.ondigitalocean.app/login", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
  }
  
  export const registerUser = (user) => {
    return fetch("https://beatenpath-app-pvyzi.ondigitalocean.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
  }  
