import { useState, useEffect } from "react";
import { fetchData } from "../../config/firebase";
import GridCard from "./GridCard";

type dataType = {
	id: string;
	src?: string;
	name: string;
	details?: string;
	category: string;
};

export default function Grid() {
	const [links, setlinks] = useState<dataType[]>([]);
	useEffect(() => {
		fetchData().then((data) => {
			setlinks(data);
			// console.log(data);
		});
	}, []);

	return (
		<section className="work-grid">
			{links.length == 0 ? (
				<p className="text text-center italic text-paleRed">loading...</p>
			) : (
				links.map((item) => (
					<GridCard
						key={item.id}
						name={item.name}
						category={item.category}
					/>
				))
			)}
		</section>
	);
}
