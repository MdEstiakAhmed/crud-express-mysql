import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import ToastNotification from "../components/notification/ToastNotification";
import { router } from "../routing/router";
import { authChecker } from "../services/authentication/authChecker";
import { ContextProvider } from "../store/store";

const App = () => {
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	const isAuthenticated = authChecker();
	// 	if (!isAuthenticated) {
	// 		console.log(isAuthenticated);
	// 		navigate("/login");
	// 	}
	// 	else {
	// 		navigate("/users");
	// 	}
	// }, []);
	return (
		<>
			<ToastNotification />
			<ContextProvider>
				<RouterProvider router={router} />
			</ContextProvider>
		</>
	);
}

export default App;
