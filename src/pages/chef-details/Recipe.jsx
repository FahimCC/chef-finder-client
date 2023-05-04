import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';

const Recipe = ({ recipe }) => {
	const { recipe_name, recipe_photo_url, rating, ingredients, cooking_method } =
		recipe;

	const [favourite, setFavourite] = useState(false);

	const handleFavourite = () => {
		setFavourite(!favourite);
		!favourite
			? toast.success('Added to Favourite')
			: toast.error('Removed from Favourite');
	};

	return (
		<div className='card lg:card-side bg-base-100 shadow-xl p-5 md:px-10 gap-7'>
			<figure className='max-w-lg h-96 rounded-lg'>
				<img className='rounded-lg' src={recipe_photo_url} alt='Food' />
			</figure>
			<div className='card-body px-0 py-0'>
				<h2 className='text-2xl font-bold flex justify-between items-center'>
					{recipe_name}
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
					{ingredients.map((ing, index) => (
						<li key={index}>{ing}</li>
					))}
				</ul>
				<p className='font-bold'>Cooking Method</p>
				<p>{cooking_method}</p>
				<div className='card-actions justify-center mt-5'>
					<Rating style={{ maxWidth: 180 }} value={rating} readOnly />
				</div>
			</div>
		</div>
	);
};

export default Recipe;
