import React from 'react';

const Banner = () => {
	return (
		<div className='pt-2'>
			<div
				className='flex justify-center items-center'
				style={{
					backgroundImage: "url('/src/assets/banner.jpg')",
					height: '70vh',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'multiply',
					backgroundColor: '#606060',
				}}
			>
				<div className='text-center text-white max-w-lg px-2'>
					<h2 className='text-4xl font-bold'>Unique & Tasty Food</h2>
					<p className='text-base font-normal my-5'>
						We are not a chef. But we are passionate about food - the tradition
						of it, cooking it, and sharing it.
					</p>
					<button className='btn-Primary rounded-full'>Hire Now</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
