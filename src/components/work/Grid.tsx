import { useState, useEffect } from "react";
import { fetchData } from "../../config/firebase";
import GridCard from "./GridCard";
import * as Dialog from "@radix-ui/react-dialog";
import DialogModal from "./Dialog";
type dataType = {
	id: string;
	src: string;
	name: string;
	details?: string;
	category: string;
};

export default function Grid() {
	const [selectedProject, setSelectedProject] = useState<dataType | null>(
		null
	);
	const [links, setlinks] = useState<dataType[]>([]);
	useEffect(() => {
		fetchData().then((data) => {
			setlinks(data);
			// console.log(data);
		});
	}, []);

	const openModal = (project: dataType) => {
		setSelectedProject(project);
	};

	return (
		<section className="work-grid">
			<Dialog.Root>
				{links.length == 0 ? (
					<p className="text text-center italic text-paleRed">
						loading...
					</p>
				) : (
					links.map((item) => (
						<Dialog.Trigger>
							<div
								key={item.id}
								onClick={() => openModal(item)}
							>
								<GridCard
									key={item.id}
									name={item.name}
									category={item.category}
								/>
							</div>
						</Dialog.Trigger>
					))
				)}

				{selectedProject && <DialogModal project={selectedProject} />}
			</Dialog.Root>
		</section>
	);
}
