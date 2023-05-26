import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AddNewMessage } from "./MessageProvider"
import { getUsers } from "../community/UserProvider"

export const MessageForm = () => {
    const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const hikeUser = user['userId']
    const[users, setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            getUsers().then(
                (userArray) => {
                    setUsers(userArray)
                }
            )
        }, []
    )
    const[message, updateMessage] = useState({
        sender: 0,
        receiver: 0,
        body: "",
        date: ""
    })
    const handleSaveButtonClick =(event) => {
        event.preventDefault()
        const newMessage = {
            sender: hikeUser,
            receiver: message.receiver,
            body: message.body,
            date: new Date().toISOString().split('T')[0]
        }
        AddNewMessage(newMessage).then(
            () => {
                navigate("/messages")
            }
        )
    }
    return <>
    <form className="font-title pt-20 text-center h-screen flex flex-wrap justify-center">
        <div className="border-slate-500 border-2 w-96 pb-4 h-96 bg-silver rounded-xl shadow-xl">
    <h2 className="text-2xl p-10">Send a new message</h2>
    <fieldset>
        <div className="pb-4">
            <label htmlFor="receiverId">Who are you wanting to send a message to?</label>
            <select 
                className="mx-auto rounded-lg border-slate-500 border-2 mt-2 w-[220px]" 
                    onChange={
                    (evt) => {
                        const copy = {...message}
                        copy.receiver = parseInt(evt.target.value)
                        updateMessage(copy)
                    }}>
                <option name= "receiver">Choose a receiver</option>

                {
                users.map((users) => {
                   return (
                    <option 
                        value={users.id}> {users.first_name}</option> 
                   )})
            } 
         </select>
        </div>
    </fieldset>
    <fieldset>
        <div className="pb-6">
            <label htmlFor="body">What do you wish to say?</label>
            <input
                required autoFocus
                type="text"
                className="mx-auto rounded-lg border-slate-500 border-2 mt-2 w-[300px]"
                value={message.body}
                onChange={
                    (evt) => {
                        const copy = {...message}
                        copy.body = evt.target.value
                        updateMessage(copy)
                    }
                } />
        </div>
    </fieldset>
    <button 
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-justColor font-light">
         Send Message
    </button>
    </div>
    </form>
    </>
}