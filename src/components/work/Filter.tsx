import { motion } from "framer-motion";

interface FilterProps {
	categories: string[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
}

export default function Filter({
	categories,
	activeCategory,
	onCategoryChange,
}: FilterProps) {
	return (
		<motion.aside
			initial={{ y: -5, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: .6, delay:.5 }}
			className="my-8 flex gap-4 items-center"
		>
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
		</motion.aside>
	);
}
