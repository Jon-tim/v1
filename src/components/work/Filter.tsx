
interface FilterProps {
	categories: string[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
}

export default function Filter({ categories, activeCategory, onCategoryChange }: FilterProps) {
	return (
		<aside className="my-8 flex gap-4 items-center">
			<p className="rounded filter py-1 px-2 capitalize w-max font-semibold ">
				filter:
			</p>
			<div className="w-full flex items-center gap-4 overflow-x-scroll p-2 h-full text-sm">
				{categories.map((category) => (
					<button
						key={category}
						className={`filter-item ${
							category === activeCategory ? "active" : ""
						}`}
						onClick={() => onCategoryChange(category)}
					>
						{category}
					</button>
				))}
			</div>
		</aside>
	);
}
