
import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { loginUser } from "./LoginProvider";


export const Login = ({setToken}) => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user )
                .then(res => {
                    if ("valid" in res && res.valid && "token" in res) {
                        setToken(res.token, res.userId)
                        navigate("/trails")
                    }
                    else {
                        invalidDialog.current.showModal()
                    }
                })
    }
return <>
    <div className="title">Off the Beaten Path</div>
    <main className="font-title w-screen h-screen image">
    <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
    <section className="flex justify-center pt-56">
        <form className="signIn text-center" onSubmit={handleLogin}>
            <h2 className="signIn_h2">Please sign in</h2>
            <fieldset className="ml-4 mr-4 text-center mb-4">
                <label htmlFor="inputUsername"> Username </label>
                <input ref={username} type="username" id="username" className="ml-2 rounded-lg border-slate-500 border-2 mt-4 mb-2" placeholder="Username" required autoFocus />    
            </fieldset>
            <fieldset className="ml-4 mr-4 text-center mb-4">
                <label htmlFor="inputPassword"> password </label>
                <input ref={password} type="password" id="password" autoComplete="on" className="ml-2 rounded-lg border-slate-500 border-2 mt-4 mb-2" placeholder="Password" required />
            </fieldset>
            <fieldset className="">
                <button type="submit" className=" btn btn-justColor font-light btn-sm mb-2">
                    Sign in
                </button>
            </fieldset>
            <section className="flex justify-center relative mb-2">
            <Link className="ml-48 pr-2 underline text-sm" to="/register">Not a member yet?</Link>
        </section>
        </form>
    </section>
</main>
</>
}
