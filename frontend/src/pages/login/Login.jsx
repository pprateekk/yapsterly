import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';
import wireframeImage from '../../assets/prototypeYapsterly.png';

const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	}

	return (
		<div className='flex items-center justify-center min-h-screen mx-auto gap-5'>
			<div className='flex-shrink-0'>
				<img src={wireframeImage} alt="Wireframe" className='w-[650px] h-[400px]' />
			</div>

			<div className='w-full max-w-md min-w-[375px] p-6 border border-1 border-gray-300'>
				<h1 className='text-3xl mt-10 font-bold text-center text-black'>
					Yapsterly
				</h1>

				<form className='mb-10 mt-5' onSubmit={handleSubmit}>
					<div className='pt-5 pl-5 pr-5 pb-1'>
						<input
							type='text'
							placeholder='Username'
							className='w-full input input-bordered input-md h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className='pt-1 pl-5 pr-5 pb-0'>
						<input
							type='password'
							placeholder='Password'
							className='w-full input input-bordered input-md h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='pt-0 pl-5 pr-5 pb-0'>
						<button className='btn btn-block btn-sm mt-5 bg-[#9AAABC] text-white' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Login"}
						</button>
					</div>

					<div className='mt-10'>
						<span className='text-sm'>{"Don't"} have an account? </span>
						<Link to='/signup' className='text-sm font-semibold text-[#9AAABC] inline-block'>
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login;
