'use client'

import { useState } from 'react';
import Image from 'next/image';
import Input  from '../(components)/Input'
import Link from 'next/link';

function SignUp() {
	const [user, setUser] = useState({
		email: "",
		name: "",
		password: "",
		passwordConfirmation: ""
	})

	const handleSubmit = (e) => {
		e.preventDefault();

		if(user.passwordConfirmation !== user.password){
			throw new Error("password incorrect")
		}

		alert(`user's info: ${user.name}; ${user.email}; ${user.password};`)
	}


	return (
		<div className="py-8 px-32 w-full h-screen">
			<div className="py-6 bg-gray-100 rounded-lg font-sans text-gray-800 grid grid-cols-3 gap-4">
				<div className="px-10 m-auto container col-span-2 flex flex-col items-center">
					<Image 
						src="/logo.png"
						width={128}
						height={128}
						className="mb-4 rounded-full self-center m-auto"
					/>
					<h1 className="text-5xl text-indigo-900 font-bold text-center mb-4">Create your account</h1>
					<div className="flex items-center w-full">
						<form className="w-full px-6" method='POST' onSubmit={handleSubmit}>
							<div className="w-full flex flex-col mb-3" id="Name">
								<label htmlFor="Name" className="font-thin">Name</label>
								<Input 
									type="text"
									placeholder="Name"
									value={user.name}
									method={(e) => setUser({ ...user, name: e.target.value})}
								/>
							</div>
							<div className="w-full flex flex-col mb-3" id="Email">
								<label htmlFor="Email" className="font-thin">Email</label>
								<Input 
									type="email"
									placeholder="Email"
									value={user.email}
									method={(e) => setUser({ ...user, email: e.target.value})}
								/>
							</div>
							<div className="w-full flex flex-col mb-3" id="Password">
								<label className="font-thin" htmlFor="Password">Password</label>
								<Input 
									type="password"
									placeholder="Password"
									value={user.password}
									method={(e) => setUser({ ...user, password: e.target.value})}
								/>
							</div>
							<div className="w-full flex flex-col mb-3" id="Password"> 
								<label className="font-thin" htmlFor="Password">Password Confirmation</label>
								<Input 
									type="password"
									placeholder="Password"
									value={user.passwordConfirmation}
									method={(e) => setUser({ ...user, passwordConfirmation: e.target.value})}
								/>
							</div>
							<button 
								type="submit" 
								className="w-full bg-indigo-950 text-white hover:bg-indigo-700 p-2 rounded-md"
							>Create Account</button>
							<p className="text-gray-500 py-2">Already have an account ? <Link className="font-semibold hover:text-gray-900" href="/auth/sign-in"> Sign In </Link></p>
						</form>
					</div>
				</div>				
				<div className="rounded-lg bg-no-repeat col-span-1 bg-cover bg-[url('/bgfluid.jpg')]">
				</div>
			</div>	
		</div>
	);
}

export default SignUp;