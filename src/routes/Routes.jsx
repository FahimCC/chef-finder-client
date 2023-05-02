import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Blog from '../pages/blog/Blog';
import ChefDetails from '../pages/chef-details/ChefDetails';
import Home from '../pages/home/Home';
import Login from '../pages/sign-up-in/Login';
import Register from '../pages/sign-up-in/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/chef-details',
				element: <ChefDetails />,
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
