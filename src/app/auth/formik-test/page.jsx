'use client'

import { useField,Form, Formik } from "formik";
//import validate from "./validate";
import * as Yup from 'yup'

const TextInput = ({ label, ...props}) => {	
	const [field, meta] = useField(props);
	return(
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	)
}

const Checkbox = ({ children, ...props}) => {
	const [field, meta] = useField({...props, type:"checkbox"});

	return(
		<>
			<label className="checkbox-input">
				<input type="checkbox" {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error ? (
				<div>{meta.error}</div>
			) : null}
		</>
	)
}

const Select = ({label, ...props}) => {
	const [field, meta] = useField(props)

	return(
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error ? (
				<div>{meta.error}</div>
			) : null}
		</>
	)
}

const SubmitButton = ({ title }) => {
	return(
		<button 
			type="submit" 
			className="p-4 bg-black hover:bg-transparent hover:border
			hover:border-b-slate-700 rounded-lg text-white hover:text-black"
		>{title}</button>
	)
}

export default function() {

	return (
		<Formik 
			initialValues = {{ firstName : '', lastName: '', email: '', acceptedTerms: false, jobType: ''}}
			validationSchema = {Yup.object({
				firstName : Yup.string()
					.max(15, 'Must be less than 15 characters')
					.required('Required Field'),
				lastName : Yup.string()
					.max(15, 'Must be less than 15 characters')
					.required('Required Field'),
				email : Yup.string()
					.email('Invalid email address')
					.required('Required Field'),
				acceptedTerms : Yup.boolean()
					.required('Required Field')
					.oneOf([true], 'You must accept the terms & conditions.'),
				jobType: Yup.string()
					.oneOf(['designer', 'dev', 'product', 'others'], 'Invalid Job Type')
					.required('Required Field')
			})}
			onSubmit={ (values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400)
			}}
		>
			<Form>
				<TextInput 
					label="First Name" 
					name= "firstName"
					type="text"
					placeholder="Ace"	
				/>
				
				<TextInput 
					label="Last Name"
					name="lastName"
					type="text"
					placeholder="Jr"
				/>

				<TextInput 
					label="Email Address"
					name="email"
					type="email"
					placeholder="acesu@gmail.com"
				/>

				<Select label="Job Type" name="jobType">
					<option value=""> Select a job type</option>
					<option value="designer">Designer</option>
					<option value="dev">Dev</option>
					<option value="product">Product Manager</option>
				</Select>

				<Checkbox name="acceptedTerms">I accept the terms & conditions </Checkbox>

				<SubmitButton title="Submit" />
			</Form>
		</Formik>
		
	);
}