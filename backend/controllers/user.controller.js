import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
	try
	{
		const loggedInUserId = req.user._id;

		const allUsers = await User.find({ _id: { $ne: loggedInUserId}}).select("-password"); //beside the logged in one

		res.status(200).json(allUsers);
	}
	catch(error)
	{
		console.log("Error fetching users for sidebar: ", error.message);
		res.status(500).json({error: "Internal Server Error"});
	}
}
