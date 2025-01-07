import React from 'react'
import Conversations from './Conversations';
import Logout from './Logout';
import SearchChat from './SearchChat'

const Sidebar = () => {
	return (
		<div className='border-r flex flex-col'>
			<SearchChat />
			<div className='border-t border-gray-300 mb-3' />
			<Conversations />
			<Logout />
		</div>
	)
}

export default Sidebar;
