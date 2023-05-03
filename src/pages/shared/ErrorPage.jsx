import Lottie from 'lottie-react';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import err from '../../../public/Error.json';

const ErrorPage = () => {
	const { error, status } = useRouteError();
	return (
		<div>
			<div className='flex flex-col items-center justify-center h-screen font-manrope text-gray'>
				<div>
					<Lottie animationData={err} loop={true} />
				</div>
				<p className='text-2xl md:text-3xl text-center font-semibold  mb-8'>
					{error?.message}
				</p>
				<Link to='/' className='btn-Primary rounded-lg'>
					Back to homepage
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
