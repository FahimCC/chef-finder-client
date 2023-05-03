import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import register from '../../assets/register.json';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
	const { signUp, updateUserProfile } = useContext(AuthContext);
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handleRegister = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const photoUrl = form.photoUrl.value;
		console.log(name, email, password, photoUrl);
		const userProfile = {
			displayName: name,
			photoURL: photoUrl,
		};

		signUp(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);

				updateUserProfile(userProfile)
					.then(() => {})
					.catch(err => [console.log(err)]);

				navigate(from, { replace: true });
				form.reset();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const handlePassword = e => {
		const password = e.target.value;
		setPassword(password);
		if (password.length <= 6) {
			setPasswordError('Password should be at least 6 characters.');
		} else {
			setPasswordError('');
		}
	};

	return (
		<div className='hero mt-10'>
			<div className='hero-content flex-col lg:flex-row gap-20'>
				<div>
					<Lottie className='h-96' animationData={register} loop={true} />
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form onSubmit={handleRegister} className='card-body'>
						<div className='form-control'>
							<input
								type='text'
								placeholder='Name'
								className='input input-bordered'
								name='name'
								required
							/>
						</div>
						<div className='form-control'>
							<input
								type='email'
								placeholder='Email'
								className='input input-bordered'
								name='email'
								required
							/>
						</div>
						<div className='form-control'>
							<input
								type='password'
								placeholder='Password'
								className='input input-bordered'
								name='password'
								onChange={handlePassword}
								value={password}
								required
							/>
						</div>
						<div className='form-control'>
							<input
								type='text'
								placeholder='Photo URL'
								className='input input-bordered'
								name='photoUrl'
								required
							/>
						</div>
						<p className='label-text-alt text-error'>{passwordError}</p>
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
