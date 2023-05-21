import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {headers, cookies} from 'next/headers'

const createClient = () => {
	createServerComponentSupabaseClient({
		headers,
		cookies 
	})
}

export default createClient;