const Input = ({type, placeholder, value, method, ...props}) => {
  return(
	<input 
		type={type}
		placeholder={placeholder}
		value={value}
		onChange={method}
		className="my-1 w-full bg-slate-200 py-2 px-2 rounded-md border border-slate-300 outline-transparent focus:outline-indigo-200"
	/> 
  )
}

export default Input;