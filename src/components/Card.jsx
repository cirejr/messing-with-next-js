import Link from "next/link";

const Card = ({ title, description }) => {
	return (
		<div className="bg-gradient-to-br from-white 
				from-10% via-cyan-200 from-5% to-white 
				backdrop-blur-sm drop-shadow-lg lg:w-1/2 p-6 
				rounded-lg h-44 bg-opacity-60 hover:-translate-y-50 
				transition ease-in-out duration-300 delay-75 hover:scale-110
				flex flex-col gap-2">
			<Link 
				href="/firebase/admin" 
				className="text-3xl font-sans font-semibold text-cyan-500 flex 
					justify-center items-center h-full"
			>{title}</Link>
			<p className='font-sans text-cyan-400 self-center lg:w-8/12 text-center'>
				{description}
			</p>
		</div>
	);
}

export default Card;