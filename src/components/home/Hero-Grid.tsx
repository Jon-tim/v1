import { Link } from "react-router-dom";
import idea from "../../assets/noun-brain-idea-3749747.svg";

export default function HeroGrid() {
	return (
		<>
			<section className="parent-box flex flex-col items-center md:flex-row gap-4">
				<div className="md:w-[35%] h-[400px] w-full child-box box box-1 flex flex-col gap-4 ">
					<div className="flex items-center h-[40%] gap-4 overflow-hidden">
						<div className="box p- bg-paleBlue h-full w-1/2 flex-1 flex items-center justify-center overflow-hidden relative">
							<i className="bx bx-briefcase text-7xl text-dark"></i>
						</div>
						<Link
							to="works"
							className="box p- h-full bg-paleRed flex-1 flex w-1/2 items-center justify-center  overflow-hidden relative group/link"
						>
							<p className="transition-all duration-300  text-dark font-semibold text-3xl capitalize px-3 py-1 group-hover/link:scale-95">
								projects
							</p>
						</Link>
					</div>
					<div className="relative box analyse bg-paleBrown h-[60%] flex  items-center flex-col justify-center p-5">
						<p className="text-dark text-center font-semibold text-xl">
							I work with C and JavaScript; Learning Python,
							Graphic and Shell programming; Practising DSAs and
							Reverse engineering
						</p>
					</div>
				</div>
				<div className="md:w-[45%] child-box h-[400px] w-full box box-2 bg-paleGreen p-5 relative overflow-hidden">
					<div className=" h-full w-full text-center flex flex-col gap-3 text-dark pt-8">
						<p className="text-xl font-semibold">
							I am interested in the application of IoTs in the
							fields of Education and Agriculture in Africa
						</p>
					</div>
					<div className="w-[500px] absolute -bottom-[320px] left-1/2 translate-x-[-50%]">
						<img
							className="w-full"
							src={idea}
							alt=""
						/>
					</div>
				</div>
				<div className="md:w-[20%] h-[200px] child-box box box-3 w-full flex gap-4 items-center md:h-[400px] md:flex-col text-dark">
					<div className="box-one flex items-center justify-center text-left p-5 h-full w-full box bg-paleBrown md:h-[70%] text-4xl text-dark gap-6 flex-wrap">
						<Link to="https://github.com/Jon-tim">
							<i className="bx bxl-github"></i>
						</Link>

						<Link to="https://twitter.com/OxTimilehin">
							<i className="bx bxl-twitter"></i>
						</Link>

						<Link to="https://www.linkedin.com/in/oluwatimilehin-awoniyi/">
							<i className="bx bxl-linkedin"></i>
						</Link>

						<Link to="mailto:awoniyitimi@outlook.com">
							<i className="bx bxl-gmail"></i>
						</Link>
					</div>
					<div className="box p-5 h-full w-full flex items-center justify-center bg-palePurple md:h-[30%] secure">
						{/* <i className="bx bxs-contact text-7xl text-dark"></i> */}
						<p className="text-dark font-semibold text-3xl capitalize">
							contact
						</p>
					</div>
				</div>
			</section>
		</>
	);
}