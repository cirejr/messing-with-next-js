const Input = ({type, placeholder, htmlFor}) => {
  return(
	<input 
		type={type}
		placeholder={placeholder}
		htmlFor={htmlFor}
		className="form-control my-2 w-full bg-slate-200 py-2 px-2 rounded-md border border-slate-300 outline-transparent focus:outline-indigo-200"
	/> 
  )
}

export default Input;