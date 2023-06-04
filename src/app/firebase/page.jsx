"use client"

import addData from "./firestore/addData";

const Page = async () => {
	const [user, setUser] = useState({
		name: "",
        job: "",
		aga:"",
	})

	const addUser = (e, user) => {
		e.preventDefault();
		setUser({...user})
		addData("Users", user)

	return alert(user, "added successfully")
	}

	return (
		<div className="flex flex-col gap-4 p-4">
			<h1 className="text-2xl font-sans text-slate-200 mb-4">Create a new user</h1>
		</div>
	);
}

export default Page;