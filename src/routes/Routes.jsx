import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Blog from '../pages/blog/Blog';
import ChefDetails from '../pages/chef-details/ChefDetails';
import Home from '../pages/home/Home';
import ErrorPage from '../pages/shared/ErrorPage';
import Login from '../pages/sign-up-in/Login';
import Register from '../pages/sign-up-in/Register';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/chef-details',
				element: (
					<ProtectedRoute>
						<ChefDetails />
					</ProtectedRoute>
				),
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

export default router;
