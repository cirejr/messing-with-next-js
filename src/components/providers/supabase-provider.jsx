'use client'

import { createContext, useContext, useState } from "react";
import createClient from "../../utils/supabase-browser";

const Context = createContext(undefined)

const SupabaseProvider = ({ children }) => {
	const [supabase] = useState( () => createClient())

	return (
		<Context.Provider value={{ supabase }}>
			<>{children}</>
		</Context.Provider>
	);
}

export default SupabaseProvider;

export const useSupabase = () => {
  const context = useContext(Context)

  if(context === undefined){
	throw new Error('useSupabase must be used inside SupabaseProvider')
  } else {
  		return context
  }
}
