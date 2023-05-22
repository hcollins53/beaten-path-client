import { useEffect, useState } from "react"
import { getUser } from "../auth/LoginProvider"
import { Link, useNavigate } from "react-router-dom"
import { getUserCompletedList } from "./TrailProvider"
import { getReviewsByUser } from "../community/PostProvider"


export const CompletedList = () => {
    const[completed, setCompleted] = useState([])
    
    const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const hikeUser = user['userId']
    const [reviews, setReviews] = useState([])
    const [screenHeight, setScreeHight] = useState("")
    useEffect(
        () => {
            getReviewsByUser(hikeUser).then(
                (reviewsArray) => {
                    setReviews(reviewsArray)
                }
            )
        }, []
    )
    useEffect(
        () => {
            getUserCompletedList(hikeUser).then(
                (completedArray) => {
                    setCompleted(completedArray)
                    if(completedArray.length > 2){
                        setScreeHight("full")
                    } else {
                        setScreeHight("screen")
                    }
                }
            )
        }, []
    )
    // useEffect(
    //     () => {
    //         getUser(hikeUser).then(
    //             (userData) => {
    //                 const singleUser = userData[0]
    //                 updateUser(singleUser)
    //             }
    //         )
    //     }, []
    // )
    const checkIfUserHasWrittenAReview = (complete) => {
       const completedReview =  reviews.find(review =>  review?.trail?.id === complete?.trail?.id)
       if(typeof completedReview === 'undefined') {
        return <Link className="btn font-light btn-justColor mx-auto" to={`/review/form/${complete?.trail?.id}`}>Write a review</Link>
       } else {
        return ""
       }
    }
    return <>
    <article className={`h-${screenHeight}`}>
    <h1 className="text-3xl font-title text-center pt-12">{completed[0]?.user?.first_name}'s Completed Trail List</h1>
    <section className="font-title pt-10 flex flex-wrap justify-center">
        {
            completed.map(complete => {
                return <section className="m-10 w-96 h-96 p-2 rounded-xl border-black border-2 shadow-2xl flex flex-wrap justify-center flex-col bg-silver" key={complete.id}>
                    <div className="text-center text-xl m-2">
                    <Link to={`/trails/${complete?.trail?.id}`}>{complete?.trail?.name}
                    </Link>
                    </div>
                    <div className="w-72 mx-auto p-4"><img className="h-56 w-72 mx-auto" src={complete?.trail?.img}/></div>
                    <div className="mx-auto mb-2">  
                       {
                       checkIfUserHasWrittenAReview(complete)
                       }
                    </div>
                    </section>
            })
        }
    </section>
    </article>
    </>
}

// if(reviews.length){
//     return reviews.map(review => {
//         if(review.trailId != complete.trailId) {
//            return  <Link className="btn font-light btn-justColor mx-auto" to={`/review/form/${complete.trailId}`}>Write a review</Link>
//         } else {
//           return ""
//         }
//     })
// } else {
//     return <Link className="btn font-light btn-justColor mx-auto" to={`/review/form/${complete.trailId}`}>Write a review</Link>
// }