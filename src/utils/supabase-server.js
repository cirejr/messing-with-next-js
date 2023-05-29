import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {headers, cookies} from 'next/headers'
import "server-only"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey= process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const createClient = () => {
	return createServerComponentSupabaseClient({
		headers,
		cookies 
	})
}

export default createClient;