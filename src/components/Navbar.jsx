'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';

const Navbar = () => {

	const pathname = usePathname();

	if(pathname.startsWith("/auth") || pathname.startsWith("/firebase")){
		return <></>
	}
		return (
				<div className="sticky h-20 px-24 py-5 flex justify-between align-middle my-auto">
					<div className="flex gap-3 align-middle justify-center z-10">
						<p className="text-3xl text-gray-300">NeXtest</p>
					</div>
					<Link 
						className="rounded-lg bg-white px-5 py-2 text-black text-lg"
						href="/auth/sign-in"
					>
						Login
					</Link>
				</div>
			)		
}

export default Navbar