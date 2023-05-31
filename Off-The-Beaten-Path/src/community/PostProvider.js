const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
export const getReviews = () => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/reviews`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
    .then(res => res.json())
}
export const AddNewReview = (newReview) => {
    const token = user["token"]
    return fetch("https://beatenpath-app-pvyzi.ondigitalocean.app/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
}
export const getReviewsByUser = (hikeUser) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/reviews?user=${hikeUser}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
    .then(res => res.json())
}
export const EditUserProfile = (userProfile) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/userprofiles/${userProfile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
           body: JSON.stringify(userProfile) 
        }).then(
            response => response.json())
}
export const AddNewProfile = (newProfile) => {
    const token = user["token"]
    return fetch("https://beatenpath-app-pvyzi.ondigitalocean.app/userprofiles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(newProfile)
        })
            .then(res => res.json())
}
export const getUserProfiles = () => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/userprofiles`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
    .then(res => res.json())
}
export const getReviewsByUserId = (id) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/reviews?user=${id}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
    .then(res => res.json())
}
export const DeletePost = review => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/reviews/${review.id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${token}`
        }
    })
}
export const EditUserPost = (review) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/reviews/${review.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
           body: JSON.stringify(review) 
        })
}
export const getReview = (id) => {
    const token = user["token"]
    return fetch(`https://beatenpath-app-pvyzi.ondigitalocean.app/reviews/${id}`, {
        headers: {
            "Accept": "application/json",
           "Authorization": `Token ${token}`
        }
    })
    .then(res => res.json())
}