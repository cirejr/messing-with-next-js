"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import signIn from "../signIn";
import Input from "@/app/auth/(components)/Input";
import { SubmitButton } from "@/app/auth/(components)/CustomInputs";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { result, error } = await signIn(email, password);
		if (error) {
			return console.log(error)
		}

		console.log(result)

		return router.push("/admin")
	}
	return (
		<div className="h-screen">
			<div className="w-full h-full grid grid-cols-3">
				<div className="col-span-1 w-full border-r h-screen border-gray-400 flex items-center justify-center lg:px-20 px-4">
					<form onSubmit={handleSubmit} className="w-full"> 
						<div className="flex flex-col my-3 gap-1 justify-center w-full ">	
							<label>Email</label>
							<Input 
								type="email"
								value={email}
								method={(e) => setEmail(e.target.value)}
								placeholder="Enter Your Email"
							/>
						</div>
						<div className="flex flex-col my-3 gap-1">
							<label>Password</label>
							<Input 
								type="password"
								value={password}
								method={(e) => setPassword(e.target.value)}
								placeholder="Enter Your Password"
							/>
						</div>
						<SubmitButton />
					</form>
				</div>
				<div className="col-span-2 px-16 m-auto h-full w-full flex items-center justify-center bg-indigo-600">
					<h1 className="text-4xl font-bold text-indigo-100">Sign In</h1>
				</div>
			</div>
		</div>
	);
}

export default Page;