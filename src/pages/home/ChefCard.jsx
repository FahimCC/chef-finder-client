import React from 'react';
import { SlLike } from 'react-icons/sl';
import { TbChefHat } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ChefCard = () => {
	return (
		<div className='card bg-base-100 border border-primary hover:border-2 hover:border-secondary'>
			<figure className='px-5 pt-5'>
				<img
					src='https://chefclubdhakahome.files.wordpress.com/2020/08/img_20200809_19244519702735.jpg'
					alt='Chef'
					className='rounded-xl h-80 w-full'
				/>
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='text-2xl font-bold'>Mohammed Ali</h2>
				<p className='font-medium'>2 Years of Experience.</p>
				<p className='flex gap-5 font-bold'>
					<span className='flex items-center gap-2'>
						<SlLike /> 40 Likes
					</span>
					<span className='flex items-center gap-2'>
						<TbChefHat /> 40+ Recipes
					</span>
				</p>
				<div className='card-actions justify-end'>
					<button className='btn-Primary rounded-xl'>
						<Link to='/chef-details'>View Recipes</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
