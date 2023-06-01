import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../shared/SectionTitle';
import Banner from './Banner';
import ChefCard from './ChefCard';
import FeaturedFood from './FeaturedFood';
import HappyCustomers from './HappyCustomers';

const Home = () => {
	const chefs = useLoaderData();

	return (
		<div>
			<Banner />
			<SectionTitle>Meet Our Chefs</SectionTitle>
			<div className='container grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
				{chefs.map(chef => (
					<ChefCard key={chef.id} chef={chef}></ChefCard>
				))}
			</div>
			<SectionTitle>Featured Food</SectionTitle>
			<div className='container grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
				<FeaturedFood />
				<FeaturedFood />
				<FeaturedFood />
			</div>
			<SectionTitle>Our Happy Customers</SectionTitle>
			<HappyCustomers />
		</div>
	);
};

export default Home;
