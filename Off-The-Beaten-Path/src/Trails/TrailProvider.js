
const air_key = process.env.REACT_APP_AIR_KEY;
const weather_key = process.env.REACT_APP_WEATHER_KEY;


const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)

export const getTrails = () => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/trails`, { 
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
            .then(res => res.json())
}
export const AddNewTrail = (newTrail) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/trails`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json",
            "Authorization": `Token ${token}`
         },
        body: JSON.stringify(newTrail) 
     })
 }
 export const getTrailById = (trailId) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/trails/${trailId}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
            .then(res => res.json())
}
export const AddNewWishList = (newWish) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/wantlists`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
         },
        body: JSON.stringify(newWish) 
     })
 }

export const GetUserWishList = (userId) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/wantlists?user=${userId}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
            .then(res => res.json())
}
export const AddNewCompletedToList = (newCompleted) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/completedlists`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "Authorization": `Token ${token}`
         },
        body: JSON.stringify(newCompleted) 
     })
 }
 export const DeleteWish = wish => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/wantlists/${wish.id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`}
    })
}
export const getUserCompletedList = (userId) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/completedlists?user=${userId}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
            .then(res => res.json())
}
export const getWeather = (trail) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${trail.lat}&lon=${trail.lon}&appid=${weather_key}&units=imperial`)
    .then(response => response.json())
    }

export const WeatherIcon = (icon) => {
    return (`http://openweathermap.org/img/wn/${icon}.png`)
}
// export const GetUserWishListById = (id) => {
//     return fetch(`http://localhost:8088/wantlist?user=${id}`)
//             .then(res => res.json())
// }
// export const getUserCompletedListById = (id) => {
//     return fetch(`http://localhost:8088/completedlist?user=${id}`)
//             .then(res => res.json())
// }
export const getSunriseOrSunsetTimes = (trail) => {
    return fetch(`https://api.sunrise-sunset.org/json?lat=${trail.lat}&lng=${trail.lon}&date=today`)
    .then(response => response.json())
}
export const getAirQuality = (trail) => {
    return fetch(`https://api.airvisual.com/v2/nearest_city?lat=${trail.lat}&lon=${trail.lon}&key=${air_key}`)
    .then(response => response.json())
}
export const getCampsitesNearTrailId = ({trailId}) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/campingsites?trail=${trailId}`,{
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
    .then(response => response.json())
}

export const getTrailsByHttpString = (httpString) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/trails?${httpString}`, {
      headers: {
        "Authorization": `Token ${token}`
      }
    }).then((res) => res.json());
  }
































