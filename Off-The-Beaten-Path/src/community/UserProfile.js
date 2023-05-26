import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserProfile } from "./UserProvider"


export const UserProfile = () => {
    const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const hikeUser = user['userId']
    const [userProfile, updateUserProfile] = useState({})
    useEffect(
        () => {
           
            getUserProfile(hikeUser).then(
                (userData) => {
                    const singleUser = userData[0]
                    updateUserProfile(singleUser)
                })
        }, []
    )

    return <>
    {
        userProfile ? <article className="font-title text-center pt-20 h-screen">
        <div className="text-2xl p-6">{userProfile?.user?.first_name}</div>
        <div className="flex justify-center pb-10">
            <img className="rounded-full shadow-xl w-60 h-60" src={userProfile.image} />
        </div>
        <div className="mb-2">Favorite hike: {userProfile.favorite_hike}</div>
        <div className="mb-2">How avid of a hiker are you: {userProfile.description}</div>
        <div className="mb-2">{userProfile.area}</div>
        <div className="underline text-blue">
            <Link to={`/profile/edit/${userProfile.id}`}>Edit Profile</Link>
        </div>
        <div>
        <Link className="btn btn-justColor font-light m-6" to={`/posts/${hikeUser}`}>
            Your Reviews
            </Link>
        </div>
    </article>
    : <Link className="font-title flex justify-center pt-40 text-2xl h-screen underline" to={`/profile/create/${hikeUser}`}>Add User Profile</Link>
    }
    

    </>
}