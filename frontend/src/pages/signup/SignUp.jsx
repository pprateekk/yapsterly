import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
	const [inputs, setInputs] = useState({
		firstname: "",
		lastname: "",
		username: "",
		password: "",
		confirmPassword: "",
	});

	const { loading, signup } = useSignup();
	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 border border-1 border-gray-300'>
				<h1 className='text-3xl mt-10 font-bold text-center text-black'>
					Yapsterly
				</h1>
				<form onSubmit={handleSubmit} className='mb-10 mt-10'>
					<div className='mt-5 ml-5 mr-5 mb-2'>
						<input type='text' placeholder='First Name' className='w-full input input-bordered input-md h-10' value={inputs.firstname} onChange={(e) => setInputs({ ...inputs, firstname: e.target.value })} />
					</div>
					<div className='mt-1 ml-5 mr-5 mb-2'>
						<input type='text' placeholder='Last Name' className='w-full input input-bordered input-md h-10' value={inputs.lastname} onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })} />
					</div>
					<div className='mt-1 ml-5 mr-5 mb-2'>
						<input type='text' placeholder='Username' className='w-full input input-bordered input-md h-10' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
					</div>

					<div className='mt-1 ml-5 mr-5 mb-2'>
						<input
							type='password'
							placeholder='Password'
							className='w-full input input-bordered input-md h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>
					<div className='mt-1 ml-5 mr-5 mb-2'>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered input-md h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>
					<div className='pt-0 pl-5 pr-5 pb-0'>
						<button className='btn btn-block btn-sm mt-5 bg-[#9AAABC] text-white' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
					<div className='mt-10'>
						<span className='text-sm '>Have an account? </span>
						<Link to='/login' className='text-sm font-semibold text-[#9AAABC] inline-block'>
							Log In
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignUp;
