"use client"

import { createContext, useContext, useEffect } from "react"
import { useSupabase } from "./supabase-provider";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Context = createContext({
	user: null,
	error: null, 
	isLoading: true, 
	mutate: null, 
	signOut: async () => {} , 
	signInWithGithub : async () => {}, 
	signInWithEmail: async (email, password) => null
})

const SupabaseAuthProvider = ({ serverSession, children }) => {
	const { supabase } = useSupabase();
	const router = useRouter();

	//Get USER
	const getUser = async () => {
		try {
			const { data : { user, error} } = await supabase.from('profiles').select('*').eq('id', serverSession?.user?.id).single();
			if (error) {
				console.log(error);
				return null;
			} else {
				return user ?? null;
			}
		} catch (error) {
			console.log(error);
			return null;
		}	
	}

	console.log(getUser())

	/*const { 
		data: {
			user, 
			error, 
			loading, 
			mutate
		}
	} = useSWR(serverSession ? "profile-context " : null, getUser )*/

	//Sign Out
	const signOut = async () => {
		await supabase.auth.signOut();
		router.push("/login")
	}

	//Sign-in With Github
	const signInWithGithub = async () => {
		await supabase.auth.signInWithOAuth({ provider: "github"})
	};

	//Sign-in With Email
	const signInWithEmail = async (email, password) => {
		await supabase.auth.signInWithPassword({email, password})
	};

	/*if (data.error) {
		return data/error.message
	}else{ 
		null
		}*/

	useEffect(() => {
		const { data : { subscription } } = supabase.auth.onAuthStateChange((event, session)=> {
			if(session?.access_token !== serverSession?.access_token){
				router.refresh();
			}
		})

		return () => subscription.unsubscribe() 
	}, [router, supabase, serverSession?.access_token])	
	
	const exposed = { /*user, error, loading, mutate*/ signOut, signInWithGithub, signInWithEmail }

	return <Context.Provider value={exposed}> {children} </Context.Provider>
}

export const useAuth = () => {
	const context = useContext(Context)
	if( context === undefined){
		throw new Error("useAuth must be used inside SupabaseAuthProvider")
	}else{
		return context;
		}
}

export default SupabaseAuthProvider;