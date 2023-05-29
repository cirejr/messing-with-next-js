
import Cards from '@/components/Cards'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-center p-24 gap-4">
		<h1 className="text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-500 to-blue-600 p-4 ">Welcome to Messing With Next Js</h1>
		<p className="text-2xl text-center text-white text-transparent">Here you can see all the cards leading to different Projects <br />
			<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-300 text-4xl font-semibold flex gap-3 items-center justify-center my-4">
				Pick your Poison 
				<span className="animate-bounce p-2 items-center justify-items-center 
					rounded-full border border-violet-300 text-violet-500">
					<AiOutlineArrowDown size={24} /></span> 
			</span>
		</p>
		<Cards />
    </main>
  )
}
