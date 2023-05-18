import { useField } from "formik"

export const Input = () => {
  return(
	<input 
		className="form-control my-2 w-full bg-slate-200 py-2 px-2 rounded-md border border-slate-300 outline-transparent focus:outline-indigo-200"
	/> 
  )
}

export const TextInput = ({label, ...props}) => {
	const [field, meta] = useField(props)

	return(
		<>
			<label htmlFor="props.id || props.name">{label}</label>
			<Input {...field} {...props} />
			{meta.touched && meta.error ? (
				<div>{meta.error}</div>
			) : null}
		</>
	)
}	

export const SubmitButton = () => {
	return(
		<button 
			type="submit"
			className="bg-indigo-900 rounded-md p-2 text-white hover:bg-blue-600 my-3 w-full"
		>Sign In</button>
	)
}

