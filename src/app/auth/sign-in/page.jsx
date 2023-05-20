'use client'

import { Form, Formik } from "formik";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Yup from 'yup'

import {Input, TextInput, SubmitButton} from '../(components)/CustomInputs'

export default function SignIn() {
	/*const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password)
	}*/


	return (
		<div className="py-8 px-32 w-full h-screen">
			<div className="py-4 bg-gray-100 rounded-lg font-sans font grid grid-cols-3 gap-4">
				<div className="rounded-lg mx-4 bg-no-repeat col-span-1 bg-cover bg-[url('/bg.jpg')]">
				</div>
				<div className="px-16 m-auto container col-span-2 flex flex-col items-center">
					<Image 
						height={128}
						width={128}
						src="/logo.png"
						className="rounded-full mb-24"
					/>
					<h1 className="text-5xl font-semibold text-gray-800 mb-10">Log in into your account </h1>
					<div className="flex items-center w-full">
						<Formik
							initialValues={{
								email:'',
								password: ''
							}}
							validationSchema={ Yup.object({
								email : Yup.string().email('Invalid email address').required('Required'),
								password : Yup.string().required('Required').min(8, 'Must be at least 8 characters')
							})}
							onSubmit={(values, {setSubmitting }) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2))
									setSubmitting(false)
								}, 400)
							}}
						>
							<Form>
								<TextInput label="Email Address"
									type="email"
									name="email"
									placeholder="acesu@gmail.com"
								/>

								<TextInput label="Password"
									type="password"
									name="password"
									placeholder="password"
								/> 

								<SubmitButton />
							</Form>
						</Formik>
					</div>
					<p className="text-gray-500">Don't have an account ? <Link href="/auth/sign-up" className="hover:text-indigo-800 font-semibold"> Sign Up</Link></p>
				</div>
			</div>
		</div>
	);
}