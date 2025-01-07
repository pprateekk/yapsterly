import { useEffect, useRef } from "react";
import Message from './Message'
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Chats = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages(); //listen to massages
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 50);
	}, [messages]);
	return (
		<div className='px-4 flex-1 overflow-auto'>

			{!loading && messages.length > 0 && messages.map((message) => (
				<div key={message._id} ref={lastMessageRef}>
					<Message message={message} />
				</div>
			))}

			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	)
}

export default Chats
