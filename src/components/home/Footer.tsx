export default function Footer() {
	const date = new Date();
	return (
		<footer className="pt-2">
			<section className="flex justify-between items-center">
				<p className="text-sm">copyright &copy; {date.getFullYear()}</p>
				<p className="text-sm">
					<a
						href="https://github.com/Jon-tim"
						className=""
						target="_blank"
					>
						<i className="bx bxl-github flex items-center capitalize gap-2">
							oluwatimilehin awoniyi
						</i>
					</a>
				</p>
			</section>
		</footer>
	);
}
