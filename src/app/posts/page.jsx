'use client'

import { useState } from "react";
import { useSupabase } from "@/components/providers/supabase-provider";

const Posts = () => {
	const [content, setContent] = useState('')
	const { supabase } = useSupabase()

	const handleSave = async () => {
		const { data } = await supabase.from('posts').insert({content}).select()
	}
	return (
		<div>
			<input 
				type="text"
				onChange={(e) => setContent( e.target.value )}
				value={content}	
			/>
			<button onClick={handleSave}>Save</button>
		</div>
	);
}

export default Posts;