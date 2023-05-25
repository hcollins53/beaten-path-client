import { useState, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import { registerUser } from "./LoginProvider"


export const Register = ({setToken}) => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    
       

    const handleRegister = (e) => {
        e.preventDefault()
        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "password": password.current.value
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        setToken(res.token, res.userId)
                        navigate("/trails")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }
    return <>
    <div className="title">Off the Beaten Path</div>
        <main className="mb-4 font-title w-screen h-screen image"style={{ textAlign: "center" }}>
        <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <form className="signIn p-4 mt-48" onSubmit={handleRegister}>
                <h1 className=" text-3xl item-center mb-4 border-b-2 border-gray-700">Please Register</h1>
                <fieldset  className="form-group" >
                    <label className="" htmlFor="fullName"> Name </label>
                    <input ref={firstName} type="text" name="firstName" className="mx-auto rounded-lg border-slate-500 border-2 mt-2 w-[200px]" placeholder="First name" required autoFocus /> 
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="mx-auto rounded-lg border-slate-500 border-2 mt-2 w-[200px]" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="mx-auto rounded-lg border-slate-500 border-2 mt-2 w-[200px]" placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="mx-auto rounded-lg border-slate-500 border-2 mt-2 w-[200px]" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="mx-auto rounded-lg border-slate-500 border-2 mt-2 w-[200px]" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <button className="btn btn-justColor font-light btn-sm" type="submit"> Register </button>
                </fieldset>
            </form>
            <section className="m-auto w-96 bg-slate-200 bg-opacity-60 shadow-lg rounded-lg">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
        </>
}