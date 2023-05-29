import Card from "./Card";

const Cards = () => {
	return (
		<>
			<div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex my-4 lg:gap-8 gap-3">
				<Card
					title="Admin Page"
					description={"Take a look at the Protected Admin Page that only authenticated user can see"}
				/>
				<Card
					title="Formik & Yup"
					description={"Login Pages with Formik and Yup"}
				/>
			</div>
			<div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex my-4 lg:gap-8 gap-3">
				<Card
					title="Supabase Authentication"
					description={"Authentication Process with Supabase"}
				/>
				<Card
					title="Portofolio"
					description={"A little Portfolio"}
				/>
			</div>
		</>
	);
}

export default Cards;