import { useState } from "react";
import GridCard from "./GridCard";
import * as Dialog from "@radix-ui/react-dialog";
import DialogModal from "./Dialog";
import { motion, AnimatePresence } from "framer-motion";
type dataType = {
	id: number;
	src: string;
	name: string;
	details: string;
	category: string;
};

type GridProps = {
	links: dataType[];
};

export default function Grid({ links }: GridProps) {
	const [selectedProject, setSelectedProject] = useState<dataType | null>(
		null
	);

	const openModal = (project: dataType) => {
		setSelectedProject(project);
	};

	return (
		<AnimatePresence>
			<section className="work-grid">
				<Dialog.Root>
					{links.length == 0 ? (
						<p className="text text-center italic text-paleRed">
							loading...
						</p>
					) : (
						links.map((item) => (
							<Dialog.Trigger key={item.id}>
								<motion.div
									layout
									onClick={() => openModal(item)}
								>
									<GridCard
										name={item.name}
										category={item.category}
									/>
								</motion.div>
							</Dialog.Trigger>
						))
					)}

					{selectedProject && (
						<DialogModal project={selectedProject} />
					)}
				</Dialog.Root>
			</section>
		</AnimatePresence>
	);
}
