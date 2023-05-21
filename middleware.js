import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server'


const middleware = async (req) => {
	const res = NextResponse.next();
	const pathname = req.nextUrl.pathname;

	const supabase = createMiddlewareSupabaseClient({req, res});
	
	const { 
		data : { session } 
		} = await supabase.auth.getSession();

		if(!session && pathname === '/'){
			const url = new URL(req.url);
			url.pathname = "/login"

			return NextResponse.redirect(url)
		}

	return res; 
}

export default middleware
