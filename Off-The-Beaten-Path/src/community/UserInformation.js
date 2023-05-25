import { useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom"
import { getUserProfileById } from "../auth/LoginProvider"
import { GetUserWishList } from "../Trails/TrailProvider"
import { getUserCompletedList } from "../Trails/TrailProvider"


export const UserInformation = () => {
    const {userId} = useParams()
    const[userProfile, setUser] = useState({})
    const [wishList, setWishList] = useState([])
    const [completed, setCompleted] = useState([])

    useEffect(
        () => {
            getUserProfileById(userId).then(
                (data) => {
                    const singleUser = data[0]
                    setUser(singleUser)
                }
            )
        }, [userId]
    )
    useEffect(
        () => {
            GetUserWishList(userId).then(
                (wishArray) => {
                    setWishList(wishArray)
            }
            ).then(
                getUserCompletedList(userId).then(
                    (completedArray) => {
                        setCompleted(completedArray)
                    }
                )
            )
        }, []
    )
    return <>
    <article className="font-title text-center mx-auto pt-4 h-screen ">
        <div className="flex justify-center pb-10">
        <img className=" rounded-full shadow-xl w-[100px] h-[100px]" src={userProfile.image} />
            <div className="text-3xl text-center my-auto pl-3">{userProfile?.user?.first_name}</div>
            </div>   

        <div className="flex flex-row justify-evenly">
            <div>
            <div className="text-xl mb-4"> {userProfile?.user?.first_name}'s' Wishlist  </div>
            <div className="h-96 carousel carousel-vertical rounded-box">
                {
                    wishList.map(wish => {
                        return <div className="carousel-item h-80 m-4 p-6 flex flex-col rounded-xl border-black border-2 shadow-2xl  bg-silver w-auto " key={wish.id}>
                        <div className="mb-4 text-xl text-center">
                            <Link to={`/trails/${wish.trail?.id}`}>{wish?.trail?.name}</Link></div>
                        <div className="w-72 mx-auto"><img className="h-56 mx-auto" src={wish?.trail?.img}/></div></div>
                    })
                }
            </div>
            </div>
            <div>
            <div className="mb-4 text-xl"> {userProfile?.user?.first_name}'s' Completed List </div>
            <div className="h-96 carousel carousel-vertical rounded-box">
                {
                    completed.map(complete => {
                        return <section className="m-4 p-6 carousel-item h-80 rounded-xl border-black border-2 shadow-2xl flex w-auto flex-col bg-silver" key={complete.id}>
                            <div className="text-center text-xl mb-4">
                            <Link to={`/trails/${complete.trail?.id}`}>{complete?.trail?.name}
                            </Link>
                            </div>
                            <div className="w-[288px] mx-auto"><img  className="h-56 mx-auto" src={complete?.trail?.img}/></div>
                            </section>
                })
            }
            </div>
            </div>
            </div>
            <Link className="btn btn-justColor font-light m-6" to={`/posts/${userId}`}>
            {userProfile?.user?.first_name}'s Reviews
            </Link>
    </article>
    </>
}