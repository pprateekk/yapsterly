import React from 'react';
import { CiLogout } from "react-icons/ci";
import { useAuthContext } from '../../context/AuthContext';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
	const { loading, logout } = useLogout();
	const { authUser } = useAuthContext();

	return (
		<div className='mt-auto ml-4 mb-4 flex justify-between items-center'>
			{!loading ? (
				<CiLogout
					className='w-6 h-6 text-white cursor-pointer'
					onClick={logout}
				/>
			) : (
				<span className='loading loading-spinner'></span>
			)}

			<div className='w-12 rounded-full mr-4'>
				<img
					src={authUser.profilePicture}
					alt="user avatar"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	)
}

export default Logout;
