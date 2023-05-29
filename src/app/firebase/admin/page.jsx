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
			<h1 className="text-4xl text-black font-bold">Only logged in user can access this page</h1>

			<button className="rounded-lg p-3 bg-slate-600 text-black " onClick={logout}>Log out </button>
		</div>
	);
}

export default Page;