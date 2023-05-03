import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Banner from './Banner';
import ChefCard from './ChefCard';
import HappyCustomers from './HappyCustomers';

const Home = () => {
	return (
		<div>
			<Banner />
			<SectionTitle>Our Chefs</SectionTitle>
			<div className='my-container grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
				<ChefCard></ChefCard>
			</div>
			<SectionTitle>Our Happy Customers</SectionTitle>
			<HappyCustomers />
		</div>
	);
};

export default Home;
