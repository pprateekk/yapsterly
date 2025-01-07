import React from 'react'
import { extractTime } from '../../../../backend/utils/getTime';
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const isSender = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const profilePic = isSender ? authUser.profilePicture : selectedConversation.profilePicture;

	return (
		<div className={`flex items-start gap-2 ${isSender ? 'flex-row-reverse' : 'flex-row'}`}>
			<div className='flex-shrink-0 flex flex-col items-center justify-center'>
				<div className='w-10 h-10 rounded-full overflow-hidden'>
					<img
						src={profilePic}
						alt="Profile"
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='text-[8px] text-[#D9D9D9] mt-1 mb-2'>{formattedTime}</div>
			</div>

			<div
				className={`text-black text-[15px] rounded-md p-2 max-w-xs h-8 mt-1 flex items-center justify-center ${isSender ? 'bg-[#D9D9D9]' : 'bg-[#889AAE]'}`}
			>
				< p > {message.message}</p>
			</div >
		</div >
	)
}

export default Message
