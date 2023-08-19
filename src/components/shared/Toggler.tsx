import useThemeHook from "../../hooks/useThemeHook";

export default function Toggler() {
	const { mode, setTheme } = useThemeHook();
	const toggleTheme = () => {
		setTheme(mode);
	};
	const icon = mode === "light" ? "bx bxs-sun" : "bx bxs-moon";
	return (
		<div
			className={`switch h-6 w-12 bg-paleRed flex ${
				mode === "dark" ? "justify-end" : "justify-start"
			} items-center  rounded-full p-1 cursor-pointer text-dark`}
			onClick={toggleTheme}
		>
			<i className={`${icon}`}></i>
		</div>
	);
}
