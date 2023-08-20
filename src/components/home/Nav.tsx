import Toggler from "../shared/Toggler";
import Logo from "../shared/Logo";

export default function Nav() {
	return (
		<nav className="flex items-center justify-between py-2">
			<Logo />
			<div className="flex items-center gap-4">
				<div className="hidde min-[400px]:flex items-center gap-4">
					<Toggler />
				</div>
				{/* <button className="capitalize bg-paleGreen px-4 py-2 rounded-md  hover:bg-paleRed transition-all duration-200 ease-linear font-semibold text-xs">
					contact me
				</button> */}
			</div>
		</nav>
	);
}
