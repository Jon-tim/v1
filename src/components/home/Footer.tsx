export default function Footer() {
	const date = new Date();
	return (
		<footer className="pt-2">
			<section className="flex justify-between items-center">
				<p className="text-sm">copyright &copy; {date.getFullYear()}</p>
				<p className="text-sm bg-white/30 backdrop-blur-xl px-3 py-1 rounded-full foot-hub">
					<a
						href="https://github.com/Jon-tim"
						className=" flex items-center capitalize gap-2"
						target="_blank"
					>
						<i className="bx bxl-github"></i>
						oluwatimilehin awoniyi
					</a>
				</p>
			</section>
		</footer>
	);
}
