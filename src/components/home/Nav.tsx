import Toggler from "../shared/Toggler";
import Logo from "../shared/Logo";

export default function Nav() {
	return (
		<nav className="flex items-center justify-between py-2">
			<Logo />
			{/* <div className="flex items-center gap-4"> */}
			{/* </div> */}
			<div className="flex items-center gap-4">
				<div className="hidden min-[400px]:flex items-center gap-4">
					<Toggler />
					<hr className="border opacity-50 h-4" />
				</div>
				<button className="capitalize bg-paleGreen px-4 py-2 rounded-md  hover:bg-paleRed transition-all duration-200 ease-linear font-semibold text-xs">
					contact me
				</button>
				<i className="bx bx-menu text-2xl min-[400px]:hidden transition-all ease-linear duration-200"></i>
			</div>
		</nav>
	);
}
