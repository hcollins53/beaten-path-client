
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './views/ApplicationViews';
import { Authorized } from './views/Authorized';
import { useState } from 'react';




function App() {
	const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
	const [userId, setUserId] = useState(localStorage.getItem('userId'))
	const setToken = (newToken, user_id) => {
		localStorage.setItem('auth_token', newToken)
		localStorage.setItem('userId', user_id)
		setTokenState(newToken)
		setUserId(user_id)
	  }
  return <>
   <Routes>
        <Route path="/login" element={<Login token={token} setToken={setToken} />} />
		  <Route path="/register" element={<Register token={token} setToken={setToken} />} />  

		<Route path="*" element={
			<Authorized token={token} setToken={setToken}>
				<>
					<NavBar token={token} setToken={setToken} userId ={userId} />
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
   </>
}

export default App;
