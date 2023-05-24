
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './views/ApplicationViews';
import { Authorized } from './views/Authorized';
import { useState } from 'react';




function App() {
	const [token, setTokenState] = useState(localStorage.getItem('hike_user'))
	
	const setToken = (auth_token, user_id) => {
		let token = {
			"token": auth_token,
			"userId": user_id
		}
		localStorage.setItem('hike_user', JSON.stringify(token))
		setTokenState(token)
	  }
	
  return <>
   <Routes>
        <Route path="/login" element={<Login  setToken={setToken} />} />
		  <Route path="/register" element={<Register setToken={setToken} />} />  

		<Route path="*" element={
			<Authorized token={token} >
				<>
					<NavBar token={token} />
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
   </>
}

export default App;
