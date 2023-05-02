import React from 'react';
import Banner from './Banner';
import ChefCard from './ChefCard';

const Home = () => {
	return (
		<div>
			<Banner />
			<div className='my-20 text-center'>
				<h2 className='text-4xl font-bold Active'>Our Chefs</h2>
				<p className='max-w-md mx-auto my-2'>
					Being a chef is about feeding people, which is part of the story of
					all humanity.
				</p>
			</div>
			<div className='my-container grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
			</div>
		</div>
	);
};

export default Home;
