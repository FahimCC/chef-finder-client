import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';

const Recipe = () => {
	const [favourite, setFavourite] = useState(false);

	const handleFavourite = () => {
		setFavourite(!favourite);
		!favourite
			? toast.success('Added to Favourite')
			: toast.error('Removed from Favourite');
	};

	return (
		<div className='card lg:card-side bg-base-100 shadow-xl p-5 md:px-10 gap-7'>
			<figure>
				<img
					className='rounded-lg'
					src='https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg'
					alt='Food'
				/>
			</figure>
			<div className='card-body px-0 py-0'>
				<h2 className='text-2xl font-bold flex justify-between items-center'>
					Mutton Biriyani
					<span
						onClick={handleFavourite}
						className='border-2 border-primary rounded-lg transform active:scale-95 transition-transform'
					>
						{favourite ? (
							<MdFavorite className='m-3 text-[24px]' />
						) : (
							<GrFavorite className='m-3 text-[24px]' />
						)}
					</span>
				</h2>
				<p className='font-bold'>Ingredients </p>
				<ul className='list-disc list-inside'>
					<li>Mutton pieces – 500 g</li>
					<li>Curd – ¼ cup </li>
					<li>Turmeric powder– ¼ Tsp </li>
					<li>Salt – ½ tsp</li>
					<li>Cumin seeds – ½ tsp </li>
				</ul>
				<p className='font-bold'>Cooking Method</p>
				<ul className='list-disc list-inside'>
					<li>
						In a large pressure cooker add 1 tbsp oil and 1 tbsp ghee as it
						heats add ½ tsp cumin seeds as it begins to splutter add 2 cloves, 1
						bay leaf, 2 cardamom pods, ½ inch cinnamon, and fry well.
					</li>
					<li>
						Now add 1 thinly sliced onion and fry until the onion turns brown,
						add ½ tsp ginger garlic paste and mix well.
					</li>
					<li>Add 2 roughly chopped tomatoes and mix well.</li>
				</ul>
				<div className='card-actions justify-center mt-5'>
					<div className='rating'>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
							checked
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
