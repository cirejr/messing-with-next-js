"use client"

import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { signOut, getAuth } from "firebase/auth";
import firebase_app from "../config";

const auth = getAuth(firebase_app)

const Page = () => {
	const { user } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (user === null) {
			return router.push("/firebase/auth/sign-in")
		}
	}, [user])

	const logout = () => {
		signOut(auth)

		return router.refresh()
	}



	return (
		<div className="flex items-center justify-center w-full h-screen p-12 flex-col">
			<h1 
				className="text-5xl mb-3 p-3 font-sans bg-clip-text text-transparent bg-gradient-to-r 
					from-violet-600 via-blue-400 to-slate-50 font-semibold">
						Only logged in user can access this page
			</h1>

			<button className="rounded-lg py-4 px-8 hover:bg-gradient-to-br hover:from-sky-500 hover:to-violet-800 hover:text-white bg-gradient-to-tl from-indigo-600 to-cyan-300 font-semibold text-black font-source text-2xl" onClick={logout}> Log Out </button>
		</div>
	);
}

export default Page;