import { useEffect, useState } from "react";
import Nav from "../components/home/Nav";
import Filter from "../components/work/Filter";
import Grid from "../components/work/Grid";
import Work_Intro from "../components/work/Work_Intro";
import data from "../data/data.json";
type dataType = {
	id: number;
	src: string;
	name: string;
	details: string;
	category: string;
};
export default function Work() {
	const [activeCategory, setActiveCategory] = useState("web apps");
	const [links, setlinks] = useState<dataType[]>([]);
	useEffect(() => {
		setlinks(data);
	}, []);

	// console.log(data);
	const categories: string[] = [
		"all",
		"html/css",
		"web apps",
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
