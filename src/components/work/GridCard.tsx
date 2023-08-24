import { motion, AnimatePresence } from "framer-motion";

// import DialogModal from "./Dialog";
type props = {
	id?: string;
	src?: string;
	name: string;
	details?: string;
	category?: string;
};

export default function GridCard({ name }: props) {
	return (
		<>
			<AnimatePresence>
				<motion.div
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1}}
					className="box project p-4 flex items-center text-center justify-center hover:bg-paleRed transition-colors duration-300"
				>
					<p className="capitalize text-2xl font-semibold">{name}</p>
				</motion.div>
			</AnimatePresence>
		</>
	);
}
