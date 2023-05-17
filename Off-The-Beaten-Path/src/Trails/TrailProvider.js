export const getTrails = () => {
    return fetch(`http://localhost:8000/trails`, { 
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
      }})
            .then(res => res.json())
}
export const AddNewTrail = (newTrail) => {
    return fetch(`http://localhost:8000/trails`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
        body: JSON.stringify(newTrail) 
     })
 }
 export const getTrailById = ({trailId}) => {
    return fetch(`http://localhost:8000/trails?id=${trailId}`)
            .then(res => res.json())
}
export const AddNewWishList = (newWish) => {
    return fetch(`http://localhost:8000/wantList`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
        body: JSON.stringify(newWish) 
     })
 }

export const GetUserWishList = (hikeUser) => {
    return fetch(`http://localhost:8000/wantList?_expand=user&_expand=trail&user=${hikeUser.id}`)
            .then(res => res.json())
}
export const AddNewCompletedToList = (newCompleted) => {
    return fetch(`http://localhost:8000/completedList`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
        body: JSON.stringify(newCompleted) 
     })
 }
 export const DeleteWish = wish => {
    return fetch(`http://localhost:8000/wantList/${wish.id}`, {
        method: "DELETE"
    })
}
export const getUserCompletedList = (hikeUser) => {
    return fetch(`http://localhost:8000/completedList?_expand=user&_expand=trail&user=${hikeUser.id}`)
            .then(res => res.json())
}
export const getWeather = (trail) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${trail.lat}&lon=${trail.lon}&appid=d00e2aa1ff1e89999b98b23f997071c4&units=imperial`)
    .then(response => response.json())
    }

export const WeatherIcon = (icon) => {
    return (`http://openweathermap.org/img/wn/${icon}.png`)
}
export const GetUserWishListById = (id) => {
    return fetch(`http://localhost:8088/wantList?_expand=user&_expand=trail&user=${id}`)
            .then(res => res.json())
}
export const getUserCompletedListById = (id) => {
    return fetch(`http://localhost:8088/completedList?_expand=user&_expand=trail&user=${id}`)
            .then(res => res.json())
}
export const getSunriseOrSunsetTimes = (trail) => {
    return fetch(`https://api.sunrise-sunset.org/json?lat=${trail.lat}&lng=${trail.lon}&date=today`)
    .then(response => response.json())
}
export const getAirQuality = (trail) => {
    return fetch(`http://api.airvisual.com/v2/nearest_city?lat=${trail.lat}&lon=${trail.lon}&key=ffe745a7-9425-4910-b912-1b8cb5d746d7`)
    .then(response => response.json())
}
export const getCampsitesNearTrailId = ({trailId}) => {
    return fetch(`http://localhost:8088/campingSites?_expand=trail&trail=${trailId}`)
    .then(response => response.json())
}


































