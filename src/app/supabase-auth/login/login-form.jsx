import { SubmitButton } from "@/app/auth/(components)/CustomInputs";
import Input from "@/app/auth/(components)/Input";
import { useAuth } from "@/components/providers/supabase-auth-provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const loginForm = () => {
	const [email, setEmail ] = useState("")
	const [password, setPassword ] = useState("")
	const [error, setError ] = useState(null)
	const { signInWithEmail, signInWithGithub, user } = useAuth();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		try {
			const error = await signInWithEmail(email, password);
			if(error){
				setError(error)
			}
		} catch (error) {
			console.log("something went wrong");
		}
	}

	//Check if there is a user
	useEffect(()=>{
		if(user){
			router.push("/")
		}
	}, [user])

	return (
		<div className="flex items-center justify-center w-full h-full px-8">
			<div className="w-full max-w-lg">
				<div>
					<h1 className="text-4xl font-bold">Login</h1>
				</div>
				<button
					onClick={signInWithGithub} 
					className="px-4 bg-indigo-950 py-1 rounded-md text-white text-center flex items-center w-full mt-6"
				>
					Login with Github
				</button>
				<div className="my-8">
					OR
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mt-6 space-y-6">
						<div className="space-y-2">
							<label>Email</label>
							<Input type="email" value={email} method={(e)=>setEmail(e.target.value)} placeholder="Your Email" />
						</div>
						<div className="space-y-2">
							<label>Password</label>
							<Input 
								type="password" 
								value={password} 
								method={(e)=>setPassword(e.target.value)} 
								placeholder="Your Password" 
							/>
						</div>
					</div>
					{error && <div className="mt-4 text-red-500">{error}</div>}
					<SubmitButton />
				</form>
			</div>
		</div>
	);
}

export default loginForm;