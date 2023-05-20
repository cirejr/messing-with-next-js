'use client'

import { useState } from 'react';
import Image from 'next/image';
import Input  from '../(components)/Input'
import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import { TextInput, SubmitButton } from '../(components)/CustomInputs';

function SignUp() {


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
						<Formik
							initialValues={{
								name: "",
								email: "",
								password: "",
								passwordConfirmation: ""	
							}}
							validationSchema={Yup.object({
								name: Yup.string().max(15, 'Must be less than 15 characters').required('REQUIRED'),
								email: Yup.string().email('Invalid email address').required('REQUIRED'),
								password: Yup.string().min(8, 'Must be at least 8 characters').required('REQUIRED'),
								passwordConfirmation: Yup.string().min(8, 'Must be at least 8 characters').required('REQUIRED')
							})}
							onSubmit={(values, {setSubmitting}) => {
								if(values.passwordConfirmation !== values.password){
									throw new Error("Password incorrect")
								}

								setTimeout(()=>{
									alert(JSON.stringify(values, null, 2))
									setSubmitting(false)
								},400)
							}}
						>
							<Form>
								<TextInput 
									label="Name"
									type="text"
									name="name"
									placeholder="Aceu"
								/>

								<TextInput 
									label="Email"
									type="email"
									name="email"
									placeholder="Your Email here"
								/>

								<TextInput 
									label="Password"
									type="password"
									name="password"
									placeholder="Type password"
								/>
								
								<TextInput 
									label="Password Confirmation"
									type="password"
									name="passwordConfirmation"
									placeholder="Type same password"
								/>

								<SubmitButton />
							</Form>
						</Formik>
					</div>
				</div>				
				<div className="rounded-lg bg-no-repeat col-span-1 bg-cover bg-[url('/bgfluid.jpg')]">
				</div>
			</div>	
		</div>
	);
}

export default SignUp;