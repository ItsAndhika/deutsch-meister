import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
	return (
		<>
			<Header />
			<main className="bg-black text-white fontse">
				<h1 className="font-bold text-3xl p-5">Learn German with Deutsch Meister</h1>
				<p className="text-lg px-5 text-gray-300">Our interactive platform offers a comprehensive curriculum, personalized learning, and expert guidance to help you master the German language.</p>	
				<div className="flex p-5 gap-5">
					<Button>Start Now</Button>
					<Button variant={"secondary"}>Learn More</Button>
				</div>
				<Image src={'/img/class.webp'} alt="class" width={1000} height={1000} className="mx-auto rounded-lg w-11/12" priority />
			</main>
		</>
	);
};
export default Home;
