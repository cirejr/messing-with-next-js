import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

const createClient = () => {
	createBrowserSupabaseClient()
}

export default createClient;