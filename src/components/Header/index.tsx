import Link from "next/link";
import LanguageIcon from "../Icons/LanguageIcon";
import { Button } from "../ui/button";

const Header = () => {
	return (
		<header className="bg-gray-950 flex justify-between items-center p-5 text-white">
			<Link href={"/"} className="flex gap-2">
				<LanguageIcon props={"w-6 h-6"} />
				<h1 className="font-semibold">Deutsch Meister</h1>
			</Link>
			<Button>Start Learning</Button>
		</header>
	);
};

export default Header;
