import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

const createClient = () => {
	return createBrowserSupabaseClient()
}

export default createClient;