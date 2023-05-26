import {  useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useRef } from 'react';
import { AddNewMessage } from "./MessageProvider";
import { getUserProfileById } from "../community/UserProvider";


export const MessageDetails = ({fullMessages, userId, updateMessages }) => {
    const[userProfile, updateUser] = useState({})
    const[myMessages, setMyMessages]= useState([])
    const localUser = localStorage.getItem("hike_user")
    const userObject = JSON.parse(localUser)
    const hikeUser = userObject['userId']
    useEffect(
        () => {
           if(userId) {
            getUserProfileById(userId).then(
                (data) => {
                    const singleUser = data
                    updateUser(singleUser)
                })}}, [userId]
    )
    useEffect(
        () => {
            getMessages()
        }, [fullMessages, userId]
    )
    const getMessages = () => {
        if(fullMessages.length)
       { let messages = fullMessages.filter(message => message.sender === parseInt(userId) || message.receiver === parseInt(userId))
        setMyMessages(messages)}
    }
    const SortMessages = () => {
       return myMessages?.map(message =>{
            if(message.sender === parseInt(userId)) {
              return <div className="chat chat-start">
               <div className="mb-2 chat-bubble max-w-xs"> {message.body} </div> <div className="chat-footer opacity-50">
               Delivered
               </div></div>
           }     
           else {
               return <div className="chat chat-end">
               <div className="mb-2 chat-bubble chat-bubble-color max-w-xs"> {message.body} </div> <div className="chat-footer opacity-50">
               Delivered
               </div></div>
           }} )
        
    }
    const inputRef = useRef(null)

   const handleSendButtonClick = (event) => {
    event.preventDefault()
    const newMessage = {
        sender: hikeUser,
        receiver: parseInt(userId),
        body: inputRef.current.value,
        date: new Date().toISOString().split('T')[0]
    }
    console.log(newMessage)
    AddNewMessage(newMessage).then(
        () => {
            updateMessages()
        })
}
   
    return <> 
    <div className="ml-6 p-4 flex flex-col h-11/12 w-11/12 border-2 border-slate-500 bg-silver mt-10">
    <div className="h-auto">
    <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center mb-4">
            {
                userProfile ? <img src={userProfile[0]?.image} className="h-[20px] w-[25px] rounded-full mr-4" />
                : ""
            }
            {
                userProfile ? <Link to={`/userProfile/${userId}`}>{userProfile[0]?.user?.first_name}</Link>
                : ""
            }
        
        </div>
        <div>
       
        </div>
    <section className="">
    
    {
        SortMessages()
    }
     
    </section>
    </div>
    </div>
   <div className="flex justify-center">
    <input type="text" placeholder="Type a message"
    ref={inputRef}
    className="rounded-lg  placeholder:text-sm mr-4"
    />
    <button className="btn font-light btn-sm btn-justColor" 
    onClick={(clickEvent) => handleSendButtonClick(clickEvent)}
    >send</button>
   </div>
    </div>
    </>
}

