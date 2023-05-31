import { getUserProfiles } from "./PostProvider"
import { useState, useEffect } from "react"
import { EachProfile } from "./EachUserProfile"

export const UserProfiles = () => {
    const[userProfiles, setUserProfiles] = useState([])
    const [screenHeight, setScreeHight] = useState("")
    useEffect(
        () => {
            getUserProfiles().then(
                (profileArray) => {
                    setUserProfiles(profileArray)
                    if(profileArray.length > 4){
                        setScreeHight("full")
                    } else {
                        setScreeHight("screen")
                    }
                }
            )
        },[]
        )

    return <>
    <article className={`h-${screenHeight}`}>
    <article className="flex flex-wrap flex-row justify-evenly">
    {    
        userProfiles.map(
            (userProfile) => <EachProfile id={userProfile.user?.id} userProfile={userProfile}/> )  
    }

  </article>
  </article>
   </>
}