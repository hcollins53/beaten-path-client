import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { getUserProfile } from "../community/UserProvider"


export const NavBar = ({setToken}) => {
    const navigate = useNavigate()
    //const localUser = localStorage.getItem('userId')
    const localUser = localStorage.getItem("hike_user")
    const user = JSON.parse(localUser)
    const userId = user["userId"]
    const [userProfile, updateUserProfile] = useState({})
    
    useEffect(
        () => {
         
          getUserProfile(userId).then(
                (userData) => {
                    const singleUser = userData[0]
                    updateUserProfile(singleUser)
                })
        }, [userId, userProfile]
    )
    return (
        <div className="navbar bg-paleDogwood w-full bg-cover text-black relative shadow-lg font-title sticky top-0 z-50">
    <div className="navbar-start ">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/wishList">Want to Try</Link></li>
          <li><Link to="/completed">Completed Trails</Link></li>
          <li><Link to="/posts">Community</Link></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
        <img className="w-20" loading="lazy" src="./logo.jpg" />
      <Link to="/trails" className="btn btn-ghost normal-case text-4xl text-caribbeanCurrent">Off the Beaten Path</Link>
    </div>
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
            <Link to="/messages">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
          </Link>
        </div>
      </button>
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            {
                userProfile ? <img src={userProfile.image} />
                : <img src="./logo.jpg" />
            }
          
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between" to='/profile'>
            Your Profile
          </Link>
        </li>
        <li>
          <Link className="justify-between" to='/userProfiles'>
          Connect with Others!
          <span className="badge">New</span>
          </Link>
        </li>
        <li>
            <Link className="navbar__link" to="/login" onClick={() => {
                    setToken("");
         }}>Logout</Link>
     </li>
      </ul>
    </div>
    </div>
  </div>
    )
}
{/* <ul className="text-xl font-body bg-caribbeanCurrent text-gray-300 flex row justify-between p-4">
            <li>
            <Link className="text-2xl" to="/trails">Off the Beaten Path</Link>
            </li>
            <li>
            <Link className="navbar__link" to="/wishList">Want to try</Link>
            </li>
            <li>
            <Link className="navbar__link" to="/completed">Completed trails</Link>
            </li>
            <li>
            <Link className="navbar__link" to="/posts">Community</Link>
            </li>
            <li>
            <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
             <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("hike_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
        </ul> */}

