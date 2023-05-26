import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { DeletePost } from "./PostProvider"
import { getReviewsByUserId } from "./PostProvider"
import { getUserProfileById } from "./UserProvider"

export const PostByUserClicked = () => {
    const[reviews, setReviews] = useState([])
    const {userId} = useParams()
    const[userProfile, setUser] = useState({})
    const [screenHeight, setScreeHight] = useState("")
    const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const hikeUser = user['userId']

    useEffect(
        () => {
            getUserProfileById(userId).then(
                (data) => {
                    const singleProfile = data[0]
                    setUser(singleProfile)
                }
            )
        }, [userId]
    )
    const getUserReviews = () => {
        getReviewsByUserId(userId).then(
            (reviewsArray) => {
                setReviews(reviewsArray)
                if(reviewsArray.length > 1){
                    setScreeHight("full")
                } else {
                    setScreeHight("screen")
                }
            }
        )
    }
    useEffect(
        () => {
           getUserReviews()
        }, [userId]
    )
    const stars = {icon1:"★", icon2:"★★", icon3: "★★★", icon4:"★★★★", icon5:"★★★★★"}
    const StarAmounts = (rating) => {
        if(rating === 1){
            return stars.icon1
        }else if
            (rating === 2){
                return stars.icon2
        } else if(rating === 3){
            return stars.icon3
        }else if(rating === 4){
            return stars.icon4
        }else if(rating === 5){
            return stars.icon5
        }
    }
    const handleDelete = (event, review) => {
        event.preventDefault()
        DeletePost(review).then(() => {
            getUserReviews()
         })  
    }
    return <>
    <div className={`h-${screenHeight}`}>
    <h1 className="text-center font-title text-4xl pt-10 pb-6">{userProfile?.user?.first_name}'s Posts</h1>
    <div className="font-title text-center flex flex-wrap justify-center">
    {
        reviews.map(review => {
            const starIcon = StarAmounts(review.rating)
            return <section className="p-4 m-10 border w-96 h-full ml-80 mr-80 flex flex-col border-2 border-black shadow-xl rounded-xl bg-silver">
                {
                    review.user?.id === hikeUser ? <div className="flex justify-end"><button className="btn-sm btn-justColor font-light" onClick={(clickEvent) => handleDelete(clickEvent, review)}>x</button> </div>
                    : ""
                }
                <div className="flex justify-center">
                <div className="text=2xl mb-2 text-center">{review.title}</div>
                </div>
                <div className="w-80 mb-4 mx-auto" >
                <Link to={`/trails/${review?.trail?.id}`}> <img className="mx-auto w-[300px] h-[200px]" src={review.img} />
                </Link>
               </div>
                <div>{review.description}</div>
                <div>Rating: {starIcon} </div>
                <div className="mb-4">Posted by {review?.user?.first_name} on {review.date}</div>
                {
                    review?.user?.id === hikeUser ? <div className=" mb-2"><Link to={`/post/edit/${review.id}`} className="btn-sm p-2 btn-justColor font-light">Edit post</Link> </div>
                    : ""
                }
               
            </section>
        })
    }
    </div>
    </div></>
}