'use client'

import { Form } from "formik";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {

	return (
		<div className="py-16 px-32 w-full h-screen">
			<div className="container rounded-lg flex gap-3 w-full h-full bg-gray-50 p-8">
				<div className="w-6/12 rounded-lg bg-no-repeat bg-cover bg-[url('/bg.jpg')]">
				</div>
				<div className="w-6/12 px-10 m-auto container flex flex-col items-center">
					<Image 
						height={128}
						width={128}
						src="/logo.png"
						className="rounded-full mb-28"
					/>
					<h1 className="text-4xl font-semibold text-gray-800 mb-10">Log in into your account </h1>
					<div className="flex items-center w-full">
						<form className="w-full px-32">
							<div class="mb-3">
								<label for="inputName" className="text-gray-700">Email</label>
								<div className="">
									<input 
										type="email" 
										className="form-control my-2 w-full bg-slate-200 py-2 px-2 rounded-md border border-slate-300 outline-transparent focus:outline-indigo-200" 
										name="inputName" id="inputEmail" placeholder="Email" 
									/>
								</div>
							</div>
							<div class="mb-3">
								<label for="inputName" className="text-gray-700">Password</label>
								<div className="">
									<input 
										type="password" 
										className="form-control my-2 w-full bg-slate-200 py-2 px-2 rounded-md border border-slate-300 outline-transparent focus:outline-indigo-200 outline-4" 
										name="inputName" id="inputPassword" placeholder="Password" 
									/>
								</div>
							</div>
							<div class="mb-3">
								<div className="">
									<button 
										type="submit" 
										className="bg-indigo-900 rounded-md p-2 text-white hover:bg-blue-600 my-3 w-full">Sign In</button>
								</div>
							</div>
						</form>
					</div>
					<p className="text-gray-500">Don't have an account ? <Link href="/auth/sign-up" className="hover:text-indigo-800 font-semibold"> Sign Up</Link></p>
				</div>
			</div>
		</div>
	);
}