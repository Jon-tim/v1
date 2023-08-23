import { useEffect, useState } from "react";
import Nav from "../components/home/Nav";
import Filter from "../components/work/Filter";
import Grid from "../components/work/Grid";
import Work_Intro from "../components/work/Work_Intro";
import { fetchData } from "../config/firebase";

type dataType = {
	id: string;
	src: string;
	name: string;
	details: string;
	category: string;
};
export default function Work() {
	const [activeCategory, setActiveCategory] = useState("all");
	const [links, setlinks] = useState<dataType[]>([]);
	useEffect(() => {
		fetchData().then((data) => {
			setlinks(data);
		});
	}, []);

	const categories: string[] = [
		"all",
		"html/css",
		"react",
		"svelte",
		"c",
		// "python",
	];

	const handleCategoryChange = (category: string) => {
		setActiveCategory(category);
	};
	const filteredLinks =
		activeCategory === "all"
			? links
			: links.filter((project) => project.category === activeCategory);
	return (
		<section className="max-w-5xl mx-auto p-4">
			<Nav />
			<section>
				<div>
					<Work_Intro />
					<section>
						<Filter
							categories={categories}
							activeCategory={activeCategory}
							onCategoryChange={handleCategoryChange}
						/>
						<Grid links={filteredLinks} />
					</section>
				</div>
			</section>
		</section>
	);
}
