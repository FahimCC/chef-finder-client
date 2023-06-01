import React, { useEffect, useState } from 'react';
import { SlLike } from 'react-icons/sl';
import { TbChefHat } from 'react-icons/tb';
import LazyLoad from 'react-lazy-load';
import { useLoaderData, useParams } from 'react-router-dom';
import banner from '../../assets/banner2.jpg';
import SectionTitle from '../shared/SectionTitle';
import Recipe from './Recipe';

const ChefDetails = () => {
	const [chef, setChef] = useState({});
	const { id } = useParams();
	const recipes = useLoaderData();

	useEffect(() => {
		const loader = async () => {
			const res = await fetch(
				'https://chef-finder-server-fahimcc.vercel.app/chefs'
			);
			const chefs = await res.json();
			const selectedChef = chefs.filter(
				chef => parseInt(chef.id) === parseInt(id)
			);
			setChef(selectedChef[0]);
		};
		loader();
	}, []);

	const { name, likes, years_of_experience, bio, num_recipes, picture } = chef;
	// console.log('hey', chef);

	return (
		<div>
			<div
				className='flex justify-center items-center w-full mt-2 h-fit'
				style={{
					backgroundImage: `url(${banner})`,
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'multiply',
					backgroundColor: '#606060',
				}}
			>
				<div className='container'>
					<div className='flex flex-col-reverse py-5 lg:py-10 md:flex-row justify-center items-center gap-10'>
						<div className='max-w-lg text-white'>
							<h2 className='text-3xl font-bold'>{name}</h2>
							<h3 className='text-lg font-medium'>
								{years_of_experience} Years of experience
							</h3>
							<p className='max-w-lg my-5'>{bio}</p>
							<p className='flex gap-5 font-bold'>
								<span className='flex items-center gap-2'>
									<SlLike /> {likes} Likes
								</span>
								<span className='flex items-center gap-2'>
									<TbChefHat /> {num_recipes} Recipes
								</span>
							</p>
						</div>
						<figure className='px-5'>
							<LazyLoad height={288} width={288} offset={200}>
								<img
									src={picture}
									alt='Chef'
									className='rounded-3xl w-72 h-72 border-2 border-secondary'
								/>
							</LazyLoad>
						</figure>
					</div>
				</div>
			</div>
			<SectionTitle>Recipes</SectionTitle>
			<div className='container space-y-5'>
				{recipes.map(recipe => (
					<Recipe key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default ChefDetails;
