import React, { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

// Components import
import ConnectionStatus from 'presentation/components/component/connexionStatus/connectionStatus';

// Theme mode verification
import { checkmode } from "presentation/utils/theme/checkmode";

// Translate librairies
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'

// Redirection route importation
const Loader = lazy(() => import('presentation/pages/redirect/loader'));

// Principal route importation
const Main = lazy(() => import('./main'));
const Dashboard = lazy(() => import('./dashboard'));
const Auth = lazy(() => import('./auth'));
const Redirect = lazy(() => import('./redirect'));

// Initialize translation
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
	debug: true,
	fallbackLng: 'fr',
	backend: {
		loadPath: "/locales/{{lng}}/translation.json",
	},
});

const queryClient = new QueryClient()

/*
* @desc: Configuration des routes
*/
function RoutesConfig() {
	
	checkmode();
	const isDarkMode = localStorage.getItem('supermode') === 'true';

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>

				{/* Notification initialization */}
				<ToastContainer
					position="bottom-right"
					theme={isDarkMode ? 'dark' : 'light'}
					autoClose={5000}
					pauseOnHover={true}
					rtl={false}
					newestOnTop={false}  
					closeOnClick
					pauseOnFocusLoss
					draggable
				/>

				{/* Constant components */}
				<ConnectionStatus />

				<Suspense fallback={<Loader />}>
					{/* Pages Routes */}
					<Main />
					<Auth />
					<Redirect />
				</Suspense>

				<Dashboard />

			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default RoutesConfig