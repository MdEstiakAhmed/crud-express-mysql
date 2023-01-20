import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './app/App';
import { router } from './routing/router';
import { ContextProvider } from './store/store';
import "./styles/style.css";
import "./styles/lib.style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <ContextProvider>
			<RouterProvider router={router} >
				<App />
			</RouterProvider>
		</ContextProvider> */}
		<App />
	</React.StrictMode>
);
