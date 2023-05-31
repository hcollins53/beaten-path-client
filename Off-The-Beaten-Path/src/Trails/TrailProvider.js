const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const hikeUser = user['userId']
    const token = user["token"]

export const getTrails = () => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/trails`, { 
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${token}`
      }})
            .then(res => res.json())
}
export const AddNewTrail = (newTrail) => {
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
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/trails/${trailId}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
            .then(res => res.json())
}
export const AddNewWishList = (newWish) => {
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
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/wantlists?user=${userId}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
            .then(res => res.json())
}
export const AddNewCompletedToList = (newCompleted) => {
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
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/wantlists/${wish.id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`}
    })
}
export const getUserCompletedList = (userId) => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/completedlists?user=${userId}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
            .then(res => res.json())
}
export const getWeather = (trail) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${trail.lat}&lon=${trail.lon}&appid=d00e2aa1ff1e89999b98b23f997071c4&units=imperial`)
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
    return fetch(`http://api.airvisual.com/v2/nearest_city?lat=${trail.lat}&lon=${trail.lon}&key=ffe745a7-9425-4910-b912-1b8cb5d746d7`)
    .then(response => response.json())
}
export const getCampsitesNearTrailId = ({trailId}) => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/campingsites?trail=${trailId}`,{
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
    .then(response => response.json())
}

export const getTrailsByHttpString = (httpString) => {
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/trails?${httpString}`, {
      headers: {
        "Authorization": `Token ${token}`
      }
    }).then((res) => res.json());
  }
































