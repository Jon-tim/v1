import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";

type dataType = {
	id: number;
	src: string;
	name: string;
	details: string;
	category: string;
};

type DialogModalProps = {
	project: dataType;
};

export default function DialogModal({ project }: DialogModalProps) {
	return (
		<>
			<Dialog.Portal>
				<Dialog.Overlay className="DialogOverlay inset-0 fixed bg-dark/30 backdrop-blur" />
				<Dialog.Content className="DialogContent">
					<div
						className="flex justify-between items-center
						 mb-4"
					>
						<Dialog.Title className="DialogTitle text-lg font-semibold capitalize md:text-xl">
							{project.name}
						</Dialog.Title>
						<Dialog.Close asChild>
							<button
								className="IconButton bg-paleRed text-dark rounded-md"
								aria-label="Close"
							>
								<i className="bx bx-x text-xl font-semibold"></i>
							</button>
						</Dialog.Close>
					</div>
					{/* {project.details.map((paragraph, index) => ( */}
					<Dialog.Description
						// key={index}
						className="DialogDescription text-sm  opacity-80 md:text-base"
						dangerouslySetInnerHTML={{
							__html: project.details,
						}}
					/>
					{/* ))} */}
					<Link
						to={project.src}
						target="_blank"
						className="flex items-center gap-1 capitalize bg-paleGreen rounded-md py-1 px-2 mt-4 w-max"
					>
						view
						<i className="bx bx-link-external"></i>
					</Link>
				</Dialog.Content>
			</Dialog.Portal>
		</>
	);
}
