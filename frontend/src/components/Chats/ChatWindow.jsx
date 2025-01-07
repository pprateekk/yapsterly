import React from 'react'
import { useEffect } from "react";
import useConversation from '../../store/useConversation';
import ChatInput from './ChatInput'
import Chats from './Chats'
import { useSocketContext } from '../../context/SocketContext';
import { useAuthContext } from '../../context/AuthContext';

const ChatWindow = () => {
	const noChatSelected = true;
	const { selectedConversation, setSelectedConversation } = useConversation();

	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(selectedConversation?._id)

	useEffect(() => {
		// cleanup function (unmounts) if logged out/refresehed, selectt he convo to see
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[650px] flex flex-col'>
			{!selectedConversation ? <NoChatSelected /> : (
				<>
					{/* Header with profile picture and username */}
					<div className='flex items-center p-2 mt-1 mb-1'>
						{/* Profile Picture */}
						<div className='w-9 h-9 rounded-full overflow-hidden'>
							<img
								src={selectedConversation.profilePicture}
								alt='Profile'
								className='w-full h-full object-cover'
							/>
						</div>

						{/* <span className='text-white ml-3'>{selectedConversation.firstname} {selectedConversation.lastname}</span> */}
						<div className='flex flex-col ml-3'>
							<span className='text-white block'>{selectedConversation.firstname} {selectedConversation.lastname}</span>
							<p className='text-white text-left text-[12px]'>
								{isOnline ? 'online' : 'offline'}
							</p>

							{/* <p className='text-white text-left text-[12px]'>online</p> */}
						</div>

					</div>

					<div className='border-t border-gray-300 mb-4' />

					<Chats />

					<ChatInput />
				</>
			)}
		</div>
	);
}

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-white flex flex-col items-center gap-2'>
				<span className='font-playwrite font-extrabold text-2xl'>Hello {authUser.firstname} {authUser.lastname} 👋 </span>
				<p className='font-playwrite font-light text-md'>Select a chat to start messaging</p>
			</div>
		</div>
	);
};

export default ChatWindow
