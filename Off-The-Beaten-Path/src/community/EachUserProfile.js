import { Link } from "react-router-dom"

export const EachProfile = ({id, userProfile}) => {
    const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const hikeUser = user['userId']
    return (
        userProfile.user?.id !== hikeUser ? 
             <section className="font-title text-center flex justify-center">
            <div className="">
            <div className="text-lg p-6">{userProfile?.user?.first_name}</div>
            <div className="flex justify-center pb-10">
                <Link to={`/userProfile/${id}`}>
                <img className="rounded-full shadow-xl w-[200px] h-[200px]" src={userProfile.image} />
                </Link>
            </div>
            <div className="mb-2">Favorite hike: {userProfile.favorite_hike}</div>
            <div className="mb-2 w-[300px]">How avid of a hiker are you: {userProfile.description}</div>
            <div className="text-center">{userProfile.area}</div>
            </div>
            </section>
            : ""
        
    )  
}