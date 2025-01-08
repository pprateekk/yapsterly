import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchChat = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		//console.log(search)
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const searchTerms = search.toLowerCase().split(" ");
		//console.log(searchTerms)

		// Find a conversation where either firstname or lastname matches the search terms
		const conversation = conversations.find((c) => {
			//console.log(c);
			return searchTerms.every((term) =>
				(c.firstname?.toLowerCase().includes(term) || c.lastname?.toLowerCase().includes(term))
			);
		});

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form className='flex items-center mr-2 ml-2 mb-[2px] p-3 gap-3' onSubmit={handleSubmit}>
			<input type="text" placeholder='Search' className='min-w-[210px] h-10 bg-white input input-bordered rounded-md text-sm'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{/* input input-bordered rounded-md  btn btn-circle*/}
			<button type='submit' className='text-white'>
				<CiSearch className='w-6 h-6' />
			</button>
		</form>
	)
}

export default SearchChat;
