import React from 'react'
import ChatWindow from '../../components/Chats/ChatWindow';
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#9AAABC]'>
			<Sidebar />
			<ChatWindow />
		</div>
	)
}

export default Home;
