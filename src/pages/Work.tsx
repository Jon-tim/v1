import Nav from "../components/home/Nav";
import Filter from "../components/work/Filter";
import Grid from "../components/work/Grid";
import Work_Intro from "../components/work/Work_Intro";

export default function Work() {
	return (
		<section className="max-w-5xl mx-auto p-4">
			<Nav />
			<section>
				<div>
					<Work_Intro />
					<section>
						<Filter />
						<Grid />
					</section>
				</div>
			</section>
		</section>
	);
}
