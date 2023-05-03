import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import React from 'react';
// import { SlLike } from 'react-icons/sl';

const ChefCard = () => {
	return (
		<div className='card bg-base-100 border border-primary'>
			<figure className='px-5 pt-5'>
				<img
					src='https://chefclubdhakahome.files.wordpress.com/2020/08/img_20200809_19244519702735.jpg'
					alt='Chef'
					className='rounded-xl h-80 w-full'
				/>
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='text-2xl font-bold'>Mohammed Ali</h2>
				<p>2 Years of Experience.</p>
				<p>40+ Recipes.</p>
				<p className='flex items-center'>
					<span className='mr-2'>
						{/* <SlLike /> */}
						<HandThumbUpIcon className='h-6 w-6 ' />
					</span>
					<span>400</span>
				</p>
				<div className='card-actions justify-end'>
					<button className='btn-Primary rounded-xl'>View Recipes</button>
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
