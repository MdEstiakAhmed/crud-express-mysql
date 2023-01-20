import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ToastNotification from "../components/notification/ToastNotification";
import useGetContext from "../hooks/useGetContext";
import Login from "../pages/Login";
import Users from "../pages/Users";
import { getLocalStorage } from "../utils/localStorage";

const App = () => {
	const { userAction, authState, authAction } = useGetContext()
	useEffect(() => {
		const user = getLocalStorage(process.env.REACT_APP_USER_LOCAL_STORAGE_KEY);
		if (user) {
			userAction.setUser(user);
			authAction.setAuth();
		}
		else {
			authAction.unsetAuth();
		}
	}, []);
	return (
		<>
			<ToastNotification />
			{
				(authState === true) ? (
					<PrivateRoute />
				) : (authState === false) ? (
					<PublicRoute />
				) : "Loading..."
			}
		</>
	);
}

export default App;


const PrivateRoute = () => {
	return (
		<>
			<section className="dashboardArea">
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route path="*" element={<Navigate to="/users" />} />
				</Routes>
			</section>
		</>
	)
}

const PublicRoute = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/login");
	}, []);
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	)
}