import React from 'react'
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { IoIosSend } from "react-icons/io";

const ChatInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
	return (
		<form className='px-4 my-3 flex items-center gap-2' onSubmit={handleSubmit}>
			<input
				type='text'
				className='text-sm rounded-lg w-full p-2.5 bg-white text-black input input-bordered '
				placeholder='Send a message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button type='submit' className='p-3 bg-white text-[#889AAE] input input-bordered rounded-lg'>
				<IoIosSend className='w-6 h-6' />
			</button>
		</form>
	)
}

export default ChatInput
