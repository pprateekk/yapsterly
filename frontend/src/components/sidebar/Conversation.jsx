import React from 'react'
import useConversation from '../../store/useConversation'

const Conversation = ({ conversation, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;

	return (
		<>
			<div className={`flex gap-3 items-center hover:bg-[#889AAE] rounded p-3 py-1 mr-2 ml-2 cursor-pointer ${isSelected ? "bg-[#889AAE]" : ""}`}
				onClick={() => setSelectedConversation(conversation)} >
				<div className=''>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePicture} alt="user online avatar" />
					</div>
				</div>
				<div className='flex flex-col'>
					<div>
						<p className='text-white'>
							{conversation.firstname} {conversation.lastname}
						</p>
					</div>
				</div>
			</div>
			{/* <div className='divider my-0 py-0 h-1' /> */}
		</>
	)
}

export default Conversation
