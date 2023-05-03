import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/Login.json';

const SignIn = () => {
	return (
		<div className='hero'>
			<div className='hero-content flex-col lg:flex-row gap-20'>
				<div>
					<Lottie className='h-96' animationData={login} loop={true} />
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<div className='card-body'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='text'
								placeholder='email'
								className='input input-bordered'
								name='email'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='text'
								placeholder='password'
								className='input input-bordered'
								name='password'
								required
							/>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Login</button>
						</div>
						<div className='mt-3'>
							<p>
								Don't have an account?{' '}
								<Link
									className='Active transform active:scale-90 transition-transform'
									to='/register'
								>
									Create
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
