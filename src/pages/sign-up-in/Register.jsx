import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/register.json';

const SignUp = () => {
	return (
		<div className='hero mt-10'>
			<div className='hero-content flex-col lg:flex-row gap-20'>
				<div>
					<Lottie className='h-96' animationData={register} loop={true} />
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<div className='card-body'>
						<div className='form-control'>
							<input
								type='text'
								placeholder='Name'
								className='input input-bordered'
								name='name' required
							/>
						</div>
						<div className='form-control'>
							<input
								type='email'
								placeholder='Email'
								className='input input-bordered'
								name='email' required
							/>
						</div>
						<div className='form-control'>
							<input
								type='password'
								placeholder='Password'
								className='input input-bordered'
								name='password' required
							/>
						</div>
						<div className='form-control'>
							<input
								type='text'
								placeholder='Photo URL'
								className='input input-bordered'
								name='photoUrl' required
							/>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Register</button>
						</div>
						<div className='mt-3'>
							<p>
								Already have an account?{' '}
								<Link
									className='Active transform active:scale-90 transition-transform'
									to='/login'
								>
									Login
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
