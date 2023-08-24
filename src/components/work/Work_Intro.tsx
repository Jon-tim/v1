import { motion } from "framer-motion";
export default function Work_Intro() {
	return (
		<>
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="box bg-paleBrown text-dark my-4 p-4"
			>
				<h1 className="text-2xl capitalize font-semibold pb-4">
					projects
				</h1>
				<div className="flex items-center gap-12">
					<i className="bx bx-briefcase text-5xl hidden  md:block"></i>
					<p className="opacity-80 w-[]">
						I try to craft interactive experiences with
						<b> JavaScript.</b> Currently mastering the art of
						<b> Fullstack Engineering</b> to bring more magic to the
						web via{" "}
						<b>
							<a
								href="https://www.alxafrica.com/software-engineering-plus/"
								className="underline"
								target="_blank"
							>
								ALX SWE Program
							</a>
						</b>
						!
						<br />
						PS: I've got a soft spot for e-commerce and dashboard
						projects.
					</p>
				</div>
			</motion.div>
		</>
	);
}
