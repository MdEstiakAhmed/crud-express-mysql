import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ContextProvider } from './store/store';
import "./styles/style.css";
import "./styles/lib.style.css";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContextProvider>
	</React.StrictMode>
);
