import React from 'react';
import { SlLike } from 'react-icons/sl';
import { TbChefHat } from 'react-icons/tb';
import LazyLoad from 'react-lazy-load';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../shared/SectionTitle';
import Recipe from './Recipe';

const ChefDetails = () => {
	const recipes = useLoaderData();
	return (
		<div>
			<div
				className='flex justify-center items-center w-full mt-2'
				style={{
					backgroundImage: "url('/src/assets/banner2.jpg')",
					height: '60vh',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'multiply',
					backgroundColor: '#606060',
				}}
			>
				<div className='my-container flex justify-center items-center gap-10'>
					<div className='max-w-lg text-white'>
						<h2 className='text-3xl font-bold'>Mohammed Ali</h2>
						<h3 className='text-lg font-medium'>3 Years of experience</h3>
						<p className='max-w-lg my-5'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
							culpa sint eveniet quaerat velit odio sit quia impedit
							praesentium. Exercitationem ipsa fugit porro culpa aliquam velit
							quas praesentium, dolorem sequi quo accusamus. Eaque enim qui
							error odio fuga, perferendis quos.
						</p>
						<p className='flex gap-5 font-bold'>
							<span className='flex items-center gap-2'>
								<SlLike /> 40 Likes
							</span>
							<span className='flex items-center gap-2'>
								<TbChefHat /> 40+ Recipes
							</span>
						</p>
					</div>
					<figure className='px-5'>
						<LazyLoad height={288} width={288}>
							<img
								src='https://chefclubdhakahome.files.wordpress.com/2020/08/img_20200809_19244519702735.jpg'
								alt='Chef'
								className='rounded-3xl w-72 h-72 border-2 border-secondary'
							/>
						</LazyLoad>
					</figure>
				</div>
			</div>
			<SectionTitle>Recipes</SectionTitle>
			<div className='my-container space-y-5'>
				{recipes.map(recipe => (
					<Recipe key={recipe.id} recipe={recipe}/>
				))}
			</div>
		</div>
	);
};

export default ChefDetails;
